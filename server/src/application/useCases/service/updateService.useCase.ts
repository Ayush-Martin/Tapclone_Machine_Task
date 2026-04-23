import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/container/types";
import { IServiceRepository } from "../../../infrastructure/interface/repository/IService.repository";
import { IUpdateServiceUseCase } from "../../interface/useCases/service/IUpdateService.useCase";
import {
  ForwardUpdateServiceDTO,
  ReverseServiceDTO,
} from "../../DTO/service/service.dto";
import ServiceEntity from "../../../domain/entities/service.entity";
import ServiceName from "../../../domain/valueObjects/service/serviceName.vo";
import ServiceDescription from "../../../domain/valueObjects/service/serviceDescription.vo";
import NotFoundError from "../../../shared/errors/not-found.error";
import { ServiceResponseMessages } from "../../../shared/constants/responseMessages";

@injectable()
class UpdateServiceUseCase implements IUpdateServiceUseCase {
  constructor(
    @inject(TYPES.ServiceRepository)
    private readonly _serviceRepository: IServiceRepository,
  ) {}

  /**
   * Updates an existing service by id
   * @param dto - Validated update service data including id
   * @returns The updated service as a ReverseServiceDTO
   */
  public async execute(dto: ForwardUpdateServiceDTO): Promise<ReverseServiceDTO> {
    const existing = await this._serviceRepository.getServiceById(dto.id);
    if (!existing) {
      throw new NotFoundError(ServiceResponseMessages.SERVICE_NOT_FOUND);
    }

    const entity = new ServiceEntity(
      dto.id,
      new ServiceName(dto.name),
      new ServiceDescription(dto.description),
    );

    const updated = await this._serviceRepository.editService(entity);
    if (!updated) {
      throw new NotFoundError(ServiceResponseMessages.SERVICE_NOT_FOUND);
    }

    return new ReverseServiceDTO(updated);
  }
}

export default UpdateServiceUseCase;

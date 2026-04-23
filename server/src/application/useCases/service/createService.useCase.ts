import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/container/types";
import { IServiceRepository } from "../../../infrastructure/interface/repository/IService.repository";
import { ICreateServiceUseCase } from "../../interface/useCases/service/ICreateService.useCase";
import {
  ForwardCreateServiceDTO,
  ReverseServiceDTO,
} from "../../DTO/service/service.dto";
import ServiceEntity from "../../../domain/entities/service.entity";
import ServiceName from "../../../domain/valueObjects/service/serviceName.vo";
import ServiceDescription from "../../../domain/valueObjects/service/serviceDescription.vo";

@injectable()
class CreateServiceUseCase implements ICreateServiceUseCase {
  constructor(
    @inject(TYPES.ServiceRepository)
    private readonly _serviceRepository: IServiceRepository,
  ) {}

  /**
   * Creates a new service
   * @param dto - Validated create service data
   * @returns The created service as a ReverseServiceDTO
   */
  public async execute(dto: ForwardCreateServiceDTO): Promise<ReverseServiceDTO> {
    const entity = new ServiceEntity(
      "",
      new ServiceName(dto.name),
      new ServiceDescription(dto.description),
    );

    const created = await this._serviceRepository.createService(entity);
    return new ReverseServiceDTO(created);
  }
}

export default CreateServiceUseCase;

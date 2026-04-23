import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/container/types";
import { IServiceRepository } from "../../../infrastructure/interface/repository/IService.repository";
import { IDeleteServiceUseCase } from "../../interface/useCases/service/IDeleteService.useCase";
import {
  ForwardDeleteServiceDTO,
  ReverseServiceDTO,
} from "../../DTO/service/service.dto";
import NotFoundError from "../../../shared/errors/not-found.error";
import { ServiceResponseMessages } from "../../../shared/constants/responseMessages";

@injectable()
class DeleteServiceUseCase implements IDeleteServiceUseCase {
  constructor(
    @inject(TYPES.ServiceRepository)
    private readonly _serviceRepository: IServiceRepository,
  ) {}

  /**
   * Deletes a service by id
   * @param dto - Validated delete service data with id
   * @returns The deleted service as a ReverseServiceDTO
   */
  public async execute(dto: ForwardDeleteServiceDTO): Promise<ReverseServiceDTO> {
    const deleted = await this._serviceRepository.deleteService(dto.id);
    if (!deleted) {
      throw new NotFoundError(ServiceResponseMessages.SERVICE_NOT_FOUND);
    }
    return new ReverseServiceDTO(deleted);
  }
}

export default DeleteServiceUseCase;

import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/container/types";
import { IServiceRepository } from "../../../infrastructure/interface/repository/IService.repository";
import { IGetAllServicesUseCase } from "../../interface/useCases/service/IGetAllServices.useCase";
import { ReverseServiceDTO } from "../../DTO/service/service.dto";

@injectable()
class GetAllServicesUseCase implements IGetAllServicesUseCase {
  constructor(
    @inject(TYPES.ServiceRepository)
    private readonly _serviceRepository: IServiceRepository,
  ) {}

  /**
   * Retrieves all services
   * @returns Array of services as ReverseServiceDTOs
   */
  public async execute(): Promise<ReverseServiceDTO[]> {
    const services = await this._serviceRepository.getAllServices();
    return services.map((s) => new ReverseServiceDTO(s));
  }
}

export default GetAllServicesUseCase;

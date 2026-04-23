import { ReverseServiceDTO } from "../../../DTO/service/service.dto";

export interface IGetAllServicesUseCase {
  execute(): Promise<ReverseServiceDTO[]>;
}

import { ForwardCreateServiceDTO, ReverseServiceDTO } from "../../../DTO/service/service.dto";

export interface ICreateServiceUseCase {
  execute(dto: ForwardCreateServiceDTO): Promise<ReverseServiceDTO>;
}

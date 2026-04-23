import { ForwardUpdateServiceDTO, ReverseServiceDTO } from "../../../DTO/service/service.dto";

export interface IUpdateServiceUseCase {
  execute(dto: ForwardUpdateServiceDTO): Promise<ReverseServiceDTO>;
}

import { ForwardDeleteServiceDTO, ReverseServiceDTO } from "../../../DTO/service/service.dto";

export interface IDeleteServiceUseCase {
  execute(dto: ForwardDeleteServiceDTO): Promise<ReverseServiceDTO>;
}

import ServiceEntity from "../../../domain/entities/service.entity";

export interface IServiceRepository {
  createService(serviceEntity: ServiceEntity): Promise<ServiceEntity>;
  deleteService(id: string): Promise<ServiceEntity | null>;
  editService(serviceEntity: ServiceEntity): Promise<ServiceEntity | null>;
  getServiceById(id: string): Promise<ServiceEntity | null>;
  getAllServices(): Promise<ServiceEntity[]>;
}
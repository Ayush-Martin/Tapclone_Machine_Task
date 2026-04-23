import { injectable } from "inversify";
import { IServiceRepository } from "../interface/repository/IService.repository";
import ServiceModel from "../db/models/services.model";
import ServiceEntity from "../../domain/entities/service.entity";
import ServiceName from "../../domain/valueObjects/service/serviceName.vo";
import ServiceDescription from "../../domain/valueObjects/service/serviceDescription.vo";

@injectable()
class ServiceRepository implements IServiceRepository {
  constructor() {}

  private _toServiceEntity(doc: any): ServiceEntity {
    return new ServiceEntity(
      doc._id.toString(),
      new ServiceName(doc.name),
      new ServiceDescription(doc.description),
    );
  }

  public async createService(entity: ServiceEntity): Promise<ServiceEntity> {
    const created = await ServiceModel.create({
      name: entity.name.value,
      description: entity.description.value,
    });
    return this._toServiceEntity(created);
  }

  public async editService(entity: ServiceEntity): Promise<ServiceEntity | null> {
    const updated = await ServiceModel.findByIdAndUpdate(
      entity.id,
      { name: entity.name.value, description: entity.description.value },
      { new: true },
    );
    return updated ? this._toServiceEntity(updated) : null;
  }

  public async deleteService(id: string): Promise<ServiceEntity | null> {
    const deleted = await ServiceModel.findByIdAndDelete(id);
    return deleted ? this._toServiceEntity(deleted) : null;
  }

  public async getServiceById(id: string): Promise<ServiceEntity | null> {
    const doc = await ServiceModel.findById(id);
    return doc ? this._toServiceEntity(doc) : null;
  }

  public async getAllServices(): Promise<ServiceEntity[]> {
    const docs = await ServiceModel.find().sort({ createdAt: -1 });
    return docs.map((doc) => this._toServiceEntity(doc));
  }
}

export default ServiceRepository;

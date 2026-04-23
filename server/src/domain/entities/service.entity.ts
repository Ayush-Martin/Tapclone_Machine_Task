import ServiceDescription from "../valueObjects/service/serviceDescription.vo";
import ServiceName from "../valueObjects/service/serviceName.vo";

class ServiceEntity {
  constructor(
    public readonly id: string,
    public readonly name: ServiceName,
    public readonly description: ServiceDescription,
  ) {}
}

export default ServiceEntity;

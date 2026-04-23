import { serviceValidationRules } from "../../../shared/validation/validationRule/serviceValidationRules";

class ServiceName {
  public value: string;
  constructor(name: string) {
    this.value = serviceValidationRules.name.parse(name);
  }
}

export default ServiceName;
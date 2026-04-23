import { serviceValidationRules } from "../../../shared/validation/validationRule/serviceValidationRules";

class ServiceDescription {
  public value: string;
  constructor(description: string) {
    this.value = serviceValidationRules.description.parse(description);
  }
}

export default ServiceDescription;

import userValidationRules from "../../../shared/validation/validationRule/userValidationRules";

class Email {
  public value: string;
  constructor(email: string) {
    this.value = userValidationRules.Email.parse(email);
  }
}

export default Email;
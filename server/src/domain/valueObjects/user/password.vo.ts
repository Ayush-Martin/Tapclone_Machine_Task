import userValidationRules from "../../../shared/validation/validationRule/userValidationRules";

class Password {
  public value: string;
  constructor(password: string) {
    this.value = password;
  }
}

export default Password;
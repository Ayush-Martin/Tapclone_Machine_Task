import Email from "../valueObjects/user/email.vo";
import Password from "../valueObjects/user/password.vo";
import Role from "../valueObjects/user/role.vo";

class UserEntity {
  constructor(
    public readonly id: string,
    public email: Email,
    public password: Password,
    public role?: Role,
  ) {}
}

export default UserEntity;

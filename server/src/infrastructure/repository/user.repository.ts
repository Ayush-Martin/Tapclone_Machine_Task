import { injectable } from "inversify";
import { IUserRepository } from "../interface/repository/IUser.repository";
import userModel, { IUserDocument } from "../db/models/user.model";
import UserEntity from "../../domain/entities/user.entity";
import Email from "../../domain/valueObjects/user/email.vo";
import Password from "../../domain/valueObjects/user/password.vo";
import Role from "../../domain/valueObjects/user/role.vo";

@injectable()
class UserRepository implements IUserRepository {
  constructor() {}

  private _toUserEntity(userDocument: IUserDocument): UserEntity {
    return new UserEntity(
      userDocument._id.toString(),
      new Email(userDocument.email),
      new Password(userDocument.password),
      new Role(userDocument.role),
    );
  }

  private _toDocument(userEntity: UserEntity): Partial<IUserDocument> {
    return {
      email: userEntity.email.value,
      password: userEntity.password.value,
    };
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await userModel.findOne({ email });
    return user ? this._toUserEntity(user) : null;
  }

  public async findById(id: string): Promise<UserEntity | null> {
    const user = await userModel.findById(id);
    return user ? this._toUserEntity(user) : null;
  }
}

export default UserRepository;


import { IRefreshTokenRepository } from "../interface/repository/IRefreshToken.repository";
import refreshTokenModel, { IRefreshTokenDocument } from "../db/models/refreshToken.model"; ;
import RefreshTokenEntity from "../../domain/entities/refreshToken.entity";
import { injectable } from "inversify";

@injectable()
class RefreshTokenRepository implements IRefreshTokenRepository {
  
  /**
   * method to map RefreshTokenDocument to RefreshTokenEntity
   * @param doc 
   * @returns 
   */
  private  _toEntity(doc: IRefreshTokenDocument) {
    return new RefreshTokenEntity(doc.refreshToken);
  }

  /**
   * method to map RefreshTokenEntity to RefreshTokenDocument
   * @param entity 
   * @returns 
   */
  private _toDocument(entity: RefreshTokenEntity) {
    return {
      refreshToken: entity.refreshToken,
    };
  }
  
  /**
   * method to create refresh token
   * @param refreshTokenEntity 
   */
  public async createRefreshToken(refreshTokenEntity: RefreshTokenEntity): Promise<void> {
    const doc = new refreshTokenModel(this._toDocument(refreshTokenEntity));
    await doc.save();
  }

  /**
   * method to delete refresh token
   * @param refreshTokenEntity 
   */
  public async deleteRefreshToken(refreshTokenEntity: RefreshTokenEntity): Promise<void> {
    await refreshTokenModel.deleteOne({ refreshToken: refreshTokenEntity.refreshToken });
  }

  /**
   * method to get refresh token
   * @param refreshTokenEntity 
   * @returns 
   */
  public async getRefreshToken(
    refreshTokenEntity: RefreshTokenEntity,
  ): Promise<RefreshTokenEntity | null> {
    const token= await refreshTokenModel.findOne({ refreshToken: refreshTokenEntity.refreshToken });
    return token ? this._toEntity(token) : null;
  }
}

export default RefreshTokenRepository;
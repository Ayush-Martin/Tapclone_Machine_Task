import { injectable, inject } from "inversify";
import RefreshTokenEntity from "../../../domain/entities/refreshToken.entity";
import { TYPES } from "../../../infrastructure/container/types";
import { IRefreshTokenRepository } from "../../../infrastructure/interface/repository/IRefreshToken.repository";
import { IUserRepository } from "../../../infrastructure/interface/repository/IUser.repository";
import { IJWTService } from "../../../infrastructure/interface/services/IJWT.service";
import { AuthResponseMessages } from "../../../shared/constants/responseMessages";
import NotFoundError from "../../../shared/errors/not-found.error";
import { IRefreshUseCase } from "../../interface/useCases/auth/IRefresh.useCase";

injectable();
class RefreshUseCase implements IRefreshUseCase {
  constructor(
    @inject(TYPES.UserRepository)
    private readonly _userRepository: IUserRepository,
    @inject(TYPES.JWTService) private readonly _jwtService: IJWTService,
    @inject(TYPES.RefreshTokenRepository)
    private readonly _refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  /**
   *
   * @param userId
   * @returns
   * Function to handle token refresh
   * - Checks if the user exists
   * - Generates access and refresh tokens
   */
  public async execute(
    userId: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this._userRepository.findById(userId);

    if (!user) {
      throw new NotFoundError(AuthResponseMessages.USER_NOT_FOUND);
    }

    const accessToken = this._jwtService.generateAccessToken(user);
    const refreshToken = this._jwtService.generateRefreshToken(user);

    await this._refreshTokenRepository.createRefreshToken(
      new RefreshTokenEntity(refreshToken),
    );

    return { accessToken, refreshToken };
  }
}

export default RefreshUseCase;

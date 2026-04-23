import { Request, Response, NextFunction } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from "../../infrastructure/container/types";

import { IJWTService } from "../../infrastructure/interface/services/IJWT.service";
import { binder } from "../../shared/utils/binder";
import UnauthorizedError from "../../shared/errors/unauthorized.error";
import { AuthResponseMessages } from "../../shared/constants/responseMessages";
import { IRefreshTokenRepository } from "../../infrastructure/interface/repository/IRefreshToken.repository";
import { IUserRepository } from "../../infrastructure/interface/repository/IUser.repository";
import ForbiddenError from "../../shared/errors/forbidden.error";
import RefreshTokenEntity from "../../domain/entities/refreshToken.entity";
import jwt from "jsonwebtoken";
import { envConfig } from "../../shared/config/env";

injectable();
class AdminAuthMiddleware {
  constructor(
    @inject(TYPES.JWTService) private readonly _jwtService: IJWTService,
    @inject(TYPES.RefreshTokenRepository)
    private readonly _refreshTokenRepository: IRefreshTokenRepository,
    @inject(TYPES.UserRepository)
    private readonly _userRepository: IUserRepository,
  ) {
    binder(this);
  }

  /**
   * method to validate access token
   * @param req
   * @param res
   * @param next
   */
  public async accessTokenValidator(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const token = this._jwtService.extractTokenFromAuthHeader(
        req.get("authorization"),
      );

      if (!token) {
        throw new UnauthorizedError(AuthResponseMessages.INVALID_ACCESS_TOKEN);
      }

      const payload = await this._jwtService.verifyAccessToken(token); //getting payload from the access token

      const jwtPayload = payload as { id: string };

      const user = await this._userRepository.findById(jwtPayload.id);

      if (!user?.role || user.role.value !== "Admin") {
        throw new ForbiddenError(AuthResponseMessages.CANNOT_ACCESS_ADMIN);
      }

      req.userId = jwtPayload.id;

      next();
    } catch (err) {
      next(err);
    }
  }

  /**
   * method to validate refresh token
   * @param req
   * @param res
   * @param next
   */
  public async refreshTokenValidator(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const refreshToken = req.cookies.refreshToken as string | undefined;
      if (!refreshToken) {
        throw new UnauthorizedError(AuthResponseMessages.INVALID_ACCESS_TOKEN);
      }

      const storedToken = await this._refreshTokenRepository.getRefreshToken(
        new RefreshTokenEntity(refreshToken),
      );

      if (!storedToken) {
        throw new UnauthorizedError(AuthResponseMessages.INVALID_ACCESS_TOKEN);
      }

      jwt.verify(
        refreshToken,
        envConfig.REFRESH_TOKEN_SECRET,
        async (err, payload) => {
          try {
            if (err) {
              req.cookies.remove();
              throw new UnauthorizedError(
                AuthResponseMessages.INVALID_ACCESS_TOKEN,
              );
            } else {
              req.userId = payload?.sub as string;
              next();
            }
          } catch (err) {
            next(err);
          }
        },
      );
    } catch (err) {
      next(err);
    }
  }
}

export default AdminAuthMiddleware;

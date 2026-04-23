import { NextFunction, Request, Response } from "express";
import { injectable, inject } from "inversify";
import {
  ForwardLoginDTO,
  ReverseLoginDTO,
} from "../../application/DTO/auth/login.dto";
import { ILoginUseCase } from "../../application/interface/useCases/auth/ILogin.useCase";
import { TYPES } from "../../infrastructure/container/types";
import { AuthResponseMessages } from "../../shared/constants/responseMessages";
import { StatusCodes } from "../../shared/constants/statusCodes";
import { binder } from "../../shared/utils/binder";
import { successResponse } from "../../shared/utils/responseCreator";
import { IRefreshUseCase } from "../../application/interface/useCases/auth/IRefresh.useCase";

@injectable()
class AuthController {
  constructor(
    @inject(TYPES.LoginUseCase) private readonly _loginUseCase: ILoginUseCase,
    @inject(TYPES.RefreshUseCae)
    private readonly _refreshUseCase: IRefreshUseCase,
  ) {
    binder(this);
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   * Function to handle user login
   * - Validates user credentials
   * - Returns access token and sets refresh token cookie
   */
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const DTO = new ForwardLoginDTO(req.body);

      const { accessToken, refreshToken } =
        await this._loginUseCase.execute(DTO);

      res
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .status(StatusCodes.OK)
        .json(
          successResponse(
            AuthResponseMessages.LOGGED_IN,
            new ReverseLoginDTO(accessToken),
          ),
        );
    } catch (err) {
      next(err);
    }
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   * Function to handle token refresh
   * - Generates a new access token using the refresh token
   */
  public async refresh(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userId = req.userId!;

      const { accessToken, refreshToken } =
        await this._refreshUseCase.execute(userId);

      res
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .status(StatusCodes.OK)
        .json(
          successResponse(
            AuthResponseMessages.TOKEN_REFRESHED,
            new ReverseLoginDTO(accessToken),
          ),
        );
    } catch (err) {
      next(err);
    }
  }
}

export default AuthController;

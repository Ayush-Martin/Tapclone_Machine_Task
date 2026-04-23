import { Container } from "inversify";
import { TYPES } from "./types";
import ErrorHandlerMiddleware from "../../presentation/middlewares/errorHandler.middleware";
import BcryptService from "../../infrastructure/services/Bcrypt.service";

import { IHashingService } from "../interface/services/IHashing.service";
import JWTService from "../../infrastructure/services/jwt.service";
import { IJWTService } from "../interface/services/IJWT.service";
import { IRefreshTokenRepository } from "../interface/repository/IRefreshToken.repository";
import { IUserRepository } from "../interface/repository/IUser.repository";
import RefreshTokenRepository from "../repository/refreshToken.repository";
import UserRepository from "../repository/user.repository";
import { ILoginUseCase } from "../../application/interface/useCases/auth/ILogin.useCase";
import { IRefreshUseCase } from "../../application/interface/useCases/auth/IRefresh.useCase";
import LoginUseCase from "../../application/useCases/auth/login.useCase";
import RefreshUseCase from "../../application/useCases/auth/refresh.useCase";
import AuthController from "../../presentation/controllers/auth.controller";
import AdminAuthMiddleware from "../../presentation/middlewares/adminAuth.middleware";

const container = new Container();

// Repositories
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
container
  .bind<IRefreshTokenRepository>(TYPES.RefreshTokenRepository)
  .to(RefreshTokenRepository);

// Services
container.bind<IHashingService>(TYPES.HashingService).to(BcryptService);
container.bind<IJWTService>(TYPES.JWTService).to(JWTService);

// Use Cases
container.bind<ILoginUseCase>(TYPES.LoginUseCase).to(LoginUseCase);
container.bind<IRefreshUseCase>(TYPES.RefreshUseCae).to(RefreshUseCase);

// Controllers
container.bind<AuthController>(TYPES.AuthController).to(AuthController);

// Middlewares
container
  .bind<ErrorHandlerMiddleware>(TYPES.ErrorHandlerMiddleware)
  .to(ErrorHandlerMiddleware);

container
  .bind<AdminAuthMiddleware>(TYPES.AdminAuthMiddleware)
  .to(AdminAuthMiddleware);

export default container;

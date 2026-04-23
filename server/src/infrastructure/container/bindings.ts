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

// Service imports
import { IServiceRepository } from "../interface/repository/IService.repository";
import ServiceRepository from "../repository/service.repository";
import { ICreateServiceUseCase } from "../../application/interface/useCases/service/ICreateService.useCase";
import { IUpdateServiceUseCase } from "../../application/interface/useCases/service/IUpdateService.useCase";
import { IDeleteServiceUseCase } from "../../application/interface/useCases/service/IDeleteService.useCase";
import { IGetAllServicesUseCase } from "../../application/interface/useCases/service/IGetAllServices.useCase";
import CreateServiceUseCase from "../../application/useCases/service/createService.useCase";
import UpdateServiceUseCase from "../../application/useCases/service/updateService.useCase";
import DeleteServiceUseCase from "../../application/useCases/service/deleteService.useCase";
import GetAllServicesUseCase from "../../application/useCases/service/getAllServices.useCase";
import ServiceController from "../../presentation/controllers/service.controller";

const container = new Container();

// Repositories
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
container
  .bind<IRefreshTokenRepository>(TYPES.RefreshTokenRepository)
  .to(RefreshTokenRepository);
container.bind<IServiceRepository>(TYPES.ServiceRepository).to(ServiceRepository);

// Services
container.bind<IHashingService>(TYPES.HashingService).to(BcryptService);
container.bind<IJWTService>(TYPES.JWTService).to(JWTService);

// Use Cases — Auth
container.bind<ILoginUseCase>(TYPES.LoginUseCase).to(LoginUseCase);
container.bind<IRefreshUseCase>(TYPES.RefreshUseCae).to(RefreshUseCase);

// Use Cases — Service
container.bind<ICreateServiceUseCase>(TYPES.CreateServiceUseCase).to(CreateServiceUseCase);
container.bind<IUpdateServiceUseCase>(TYPES.UpdateServiceUseCase).to(UpdateServiceUseCase);
container.bind<IDeleteServiceUseCase>(TYPES.DeleteServiceUseCase).to(DeleteServiceUseCase);
container.bind<IGetAllServicesUseCase>(TYPES.GetAllServicesUseCase).to(GetAllServicesUseCase);

// Controllers
container.bind<AuthController>(TYPES.AuthController).to(AuthController);
container.bind<ServiceController>(TYPES.ServiceController).to(ServiceController);

// Middlewares
container
  .bind<ErrorHandlerMiddleware>(TYPES.ErrorHandlerMiddleware)
  .to(ErrorHandlerMiddleware);

container
  .bind<AdminAuthMiddleware>(TYPES.AdminAuthMiddleware)
  .to(AdminAuthMiddleware);

export default container;

export enum TYPES {
  // Repositories
  UserRepository = "UserRepository",
  RefreshTokenRepository = "RefreshTokenRepository",
  ServiceRepository = "ServiceRepository",

  // Services
  HashingService = "HashingService",
  JWTService = "JWTService",

  // Use Cases
  LoginUseCase = "LoginUseCase",
  RefreshUseCae = "RefreshUseCae",
  CreateServiceUseCase = "CreateServiceUseCase",
  UpdateServiceUseCase = "UpdateServiceUseCase",
  DeleteServiceUseCase = "DeleteServiceUseCase",
  GetAllServicesUseCase = "GetAllServicesUseCase",

  // Controllers
  AuthController = "AuthController",
  ServiceController = "ServiceController",

  // Middlewares
  ErrorHandlerMiddleware = "ErrorHandlerMiddleware",
  AdminAuthMiddleware = "AdminAuthMiddleware",
}

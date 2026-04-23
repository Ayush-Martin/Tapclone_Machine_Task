export enum TYPES {
  // Repositories
  UserRepository = "UserRepository",
  RefreshTokenRepository = "RefreshTokenRepository",

  // Services
  HashingService = "HashingService",
  JWTService = "JWTService",

  // Use Cases
  LoginUseCase = "LoginUseCase",
  RefreshUseCae = "RefreshUseCae",

  // Controllers
  AuthController = "AuthController",

  // Middlewares
  ErrorHandlerMiddleware = "ErrorHandlerMiddleware",
  AdminAuthMiddleware = "AdminAuthMiddleware",
}

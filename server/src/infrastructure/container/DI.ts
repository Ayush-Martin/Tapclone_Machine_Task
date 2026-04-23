import AuthController from "../../presentation/controllers/auth.controller";
import ServiceController from "../../presentation/controllers/service.controller";
import AdminAuthMiddleware from "../../presentation/middlewares/adminAuth.middleware";
import ErrorHandlerMiddleware from "../../presentation/middlewares/errorHandler.middleware";

import container from "./bindings";
import { TYPES } from "./types";

// Controllers
export const authController = container.get<AuthController>(
  TYPES.AuthController,
);

export const serviceController = container.get<ServiceController>(
  TYPES.ServiceController,
);

// Middlewares
export const errorHandlerMiddleware = container.get<ErrorHandlerMiddleware>(
  TYPES.ErrorHandlerMiddleware,
);

export const adminAuthMiddleware = container.get<AdminAuthMiddleware>(
  TYPES.AdminAuthMiddleware,
);
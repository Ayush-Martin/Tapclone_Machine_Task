import { Container } from "inversify";
import { TYPES } from "./types";
import ErrorHandlerMiddleware from "../../presentation/middlewares/errorHandler.middleware";
import BcryptService from "../../infrastructure/services/Bcrypt.service";

import { IHashingService } from "../interface/services/IHashing.service";
import JWTService from "../../infrastructure/services/jwt.service";
import { IJWTService } from "../interface/services/IJWT.service";

const container = new Container();

// Repositories

// Services
container.bind<IHashingService>(TYPES.HashingService).to(BcryptService);
container.bind<IJWTService>(TYPES.JWTService).to(JWTService);

// Use Cases

// Controllers

// Middlewares
container
  .bind<ErrorHandlerMiddleware>(TYPES.ErrorHandlerMiddleware)
  .to(ErrorHandlerMiddleware);

export default container;

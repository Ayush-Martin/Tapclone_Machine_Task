import { Router } from "express";
import {
    adminAuthMiddleware,
  authController,
} from "../../infrastructure/container/DI";

const authRouter = Router();

authRouter.post("/login", authController.login);

authRouter.post(
  "/refresh",
  adminAuthMiddleware.refreshTokenValidator,
  authController.refresh,
);

export default authRouter;
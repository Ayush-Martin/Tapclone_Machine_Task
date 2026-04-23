import { Router } from "express";
import {
  adminAuthMiddleware,
  serviceController,
} from "../../infrastructure/container/DI";

const serviceRouter = Router();

// Public
serviceRouter.get("/", serviceController.getAll);

// Admin protected
serviceRouter.post(
  "/",
  adminAuthMiddleware.accessTokenValidator,
  serviceController.create,
);

serviceRouter.put(
  "/:id",
  adminAuthMiddleware.accessTokenValidator,
  serviceController.update,
);

serviceRouter.delete(
  "/:id",
  adminAuthMiddleware.accessTokenValidator,
  serviceController.delete,
);

export default serviceRouter;

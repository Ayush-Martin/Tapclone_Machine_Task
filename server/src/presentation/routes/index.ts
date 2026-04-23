import { Router } from "express";
import authRouter from "./auth.route";
import serviceRouter from "./service.route";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

apiRouter.use("/auth", authRouter);
apiRouter.use("/services", serviceRouter);

export default apiRouter;

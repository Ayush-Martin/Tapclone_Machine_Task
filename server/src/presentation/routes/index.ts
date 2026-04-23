import { Router } from "express";
import authRouter from "./auth.route";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

apiRouter.use("/auth", authRouter);

export default apiRouter;

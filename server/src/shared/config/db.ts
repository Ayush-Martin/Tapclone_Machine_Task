import mongoose from "mongoose";
import { envConfig } from "./env";

export const connectDB = async () => {
  await mongoose.connect(envConfig.MONGODB_URI, {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  });

  console.log("[Database] connected to mongodb");
};

import App from "./app";
import http from "http";
import "reflect-metadata";

import { envConfig } from "./shared/config/env";
import { connectDB } from "./shared/config/db";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Force Google DNS
import bcrypt from "bcryptjs";

const appInstance = new App();
const server = http.createServer(appInstance.app);

async function init() {
  await connectDB();
}

init()
  .then(() => {
    server.listen(process.env.PORT || 5000, () => {
      console.info(`[Server] Running on port ${envConfig.PORT}`);
    });
  })
  .catch((err) => {
    console.error(`[Application] [Error] ${err}`);
  });


const password = "Admin123!";
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    console.log(hash); 
});
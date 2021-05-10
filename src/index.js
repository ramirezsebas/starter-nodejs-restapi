import dotenv from "dotenv";

import Server from "./models/server.js";

dotenv.config();

const myServer = new Server();

myServer.createHttpServer();
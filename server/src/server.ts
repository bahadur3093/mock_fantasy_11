import app from "./app";
import { createServer } from "http";

const server = createServer(app);

export default server;
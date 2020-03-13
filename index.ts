import Server from "./classes/server";
import router from "./routes/router";
import { SERVER_PORT } from "./global/enviroments";
import bodyParser from "body-parser";
import cors from "cors";

const server = new Server();

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Cors
server.app.use(cors({ credentials: true, origin: true }));

// Service Routes
server.app.use("/", router);

server.start(() => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

import { json, static as st } from "express";
import cors from "cors";
// import * as routers from "./src/modules/index.js";
import { globaleResponse } from "./src/middleware/index.js";
import * as routers from "./src/modules/index.js";
import path from "path";
import { fileURLToPath } from "url";
export const routerHandler = (app) => {
  app.use(json());
  app.use(cors());
  // Serve static files from the "src/uploads" folder via "/Assets"
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  // Serve static files from the "src/uploads" folder via "/Assets"
  app.use("/Assets", st(path.join(__dirname, "src", "uploads")));
  app.use("/users", routers.UserRouter);
  app.use("/auth", routers.AuthRouter);
  app.use("*", (req, res) => {
    res.status(404).json({ msg: "This router is not exist", status: 404 });
  });
  app.use(globaleResponse);
};

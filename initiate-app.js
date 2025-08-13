import express from "express";
import { config } from "dotenv";

import { db_connection } from "./DB/connection.js";

import {
  cronJobForRemovingEpiredTokens
} from "./src/utils/index.js";
import { gracefulShutdown } from "node-schedule";
import { routerHandler } from "./router-handler.js";

export const main = () => {

  const app = express();

  config();
  
  /**
   * @comment declare the port constant before use it directly [ in line 35 in this case ]
   */
  const port = process.env.PORT || 3000;

  routerHandler(app);

  db_connection();

  cronJobForRemovingEpiredTokens();
  gracefulShutdown();

  /**
   * @comment this is router will be not accessable because the app.use inside the routerHandler function will return 404 error if we send [ /  - GET ]
   */
  app.get("/", (req, res) => res.send("Hello World!"));

  /**
   * @comment remove the commented code
   * @comment no need for variable serverApp unless we not use it 
   */

  const serverApp = app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
  );
  // const io = socketConnection(serverApp);
};

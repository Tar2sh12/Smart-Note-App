

/**
 * @comment this file suppose to be in src folder because if we use TS this file will need to be complied to JS
 */
import { json, static as st } from "express";
import cors from "cors";
import { globaleResponse } from "./src/middleware/index.js";
import * as routers from "./src/modules/index.js";

import path from "path";
import { fileURLToPath } from "url";


import { createHandler } from "graphql-http/lib/use/express";
//note main schema 
import { mainSchema } from "./src/GraphQl/Schema/index.js";

//security middlewares
import helmet from "helmet";
// Rate limiting middleware
import {rateLimit} from "express-rate-limit";


/**
 * @comment this is a middleware so we need to move it to the middlewares folder
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs=> 15 mins
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message:"Too many requests, please try again later.",
});

export const routerHandler = (app) => {
  app.use(json());
  app.use(cors());
  app.use(helmet()); // Use Helmet for security headers

  /**
   * @comment we can use path.resolve() instead of path.join() with these manual steps
   */
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);


  //apply rate limiting middleware
  app.use(limiter);// in case of high traffic, this will limit the number of requests and if the limit is exceeded, it will return a 429 status code with a message "Too many requests, please try again later."


  // Serve static files from the "src/uploads" folder via "/Assets"
  app.use("/Assets", st(path.join(__dirname, "src", "uploads")));
  // app.use("/Assets", st(path.resolve('src/uploads')));


  app.use("/users", routers.UserRouter);
  app.use("/auth", routers.AuthRouter);
  app.use("/note", routers.NoteRouter);

  //GraphQL
  app.use("/graphql", createHandler({ schema: mainSchema }));

  app.use("*", (req, res) => {
    res.status(404).json({ msg: "This router is not exist", status: 404 });
  });
  
  app.use(globaleResponse);
};

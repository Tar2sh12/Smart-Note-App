import { User } from "../../../DB/models/index.js";
import jwt from "jsonwebtoken";
export const isAuthQL = async (token) => {
  try {
    if (!token) {
      throw new Error("please login first", { cause: 400 });
    }
    // check if token starts with prefix
    if (!token.startsWith(process.env.PREFIX_SECRET)) {
      throw new Error("invalid credentials", { cause: 400 });
    }
    // retrieve original token after adding the prefix
    const originalToken = token.split(" ")[1];

    // verify token
    /**
     * @comment it's better to generate a tokens utils file to generate and verfiy tokens from it using functions
     * this is help you to load the jwt module once on this module also if you need to change the way to generate or verify tokens you can do it in one place
     */
    const data = jwt.verify(originalToken, process.env.LOGIN_SECRET);
    // check if token payload has userId
    if (!data?.userId) {
      throw new Error("please signup first", { cause: 400 });
    }
    // find user by userId
    const isUserExists = await User.findById(data?.userId);
    if (
      !isUserExists ||
      !isUserExists.isEmailVerified ||
      isUserExists.isMarkedAsDeleted
    ) {
      throw new Error("user not found", { cause: 404 });
    }
    return {
        code:200,
        isUserExists
    }
  } catch (error) {
    throw new Error(error, { cause: 500 });
  }
};
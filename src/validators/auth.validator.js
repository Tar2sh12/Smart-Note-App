import Joi from "joi";
import {  systemRoles } from "../utils/index.js";

/**
 * @comment we can move the email and password to general-rules.utils.js
 */
export const createUserSchema = {
  body: Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    userType: Joi.string().valid(...Object.values(systemRoles)), // 🚀 very nice 
    phone: Joi.string(),
  })
};

export const loginSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};
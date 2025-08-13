import Joi from "joi";
import { systemRoles } from "../utils/index.js";
import { generalRules } from "../utils/general-rules.utils.js";

export const createNoteSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }),
  headers: Joi.object({
    token: Joi.string().required(), // no need
    ...generalRules.headers,
  }),
};

export const summarizeNoteSchema = {
  params: Joi.object({
    id: generalRules._id,
  }),
  headers: Joi.object({
    token: Joi.string().required(),
    ...generalRules.headers,
  }),
};

export const deleteNoteSchema ={
    params: Joi.object({
        id: generalRules._id,
    }),
    headers: Joi.object({
        token: Joi.string().required(),
        ...generalRules.headers,
    }),
}


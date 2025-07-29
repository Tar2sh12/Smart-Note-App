import * as controller from "./services/note.service.js";
// middlewares
import * as Middlewares from "../../middleware/index.js";
// utils
import { extensions } from "../../utils/index.js";
import { Router } from "express";
import { createNoteSchema, deleteNoteSchema, summarizeNoteSchema } from "../../validators/note.validator.js";
const NoteRouter = Router();
const { errorHandler, auth, validationMiddleware, authorizationMiddleware ,multerMiddleware} =
  Middlewares;
NoteRouter.post("/create-note",
  errorHandler(auth()),
    errorHandler(validationMiddleware(createNoteSchema)),
  errorHandler(controller.createNote)
);

NoteRouter.post("/summarize/:id",
  errorHandler(auth()),
  errorHandler(validationMiddleware(summarizeNoteSchema)),
  errorHandler(controller.summarizeNote)
);


NoteRouter.delete("/delete-note/:id",
  errorHandler(auth()),
    errorHandler(validationMiddleware(deleteNoteSchema)),
    errorHandler(controller.deleteNote)
);

export { NoteRouter };

import { Router } from "express";
import {authorSchema} from "../models/Schemas/authorSchema.js";
import { validationCtrl } from "../middlewares/validator.js";
import { addBookToAuthorCtrl, addAuthorCtrl, getAuthorsCtrl, getAuthorByIdCtrl, deleteAuthorCtrl, updateAuthorCtrl } from "../controllers/author.controller.js";
const authorRouter = Router();

authorRouter.get("/", getAuthorsCtrl);
authorRouter.get("/:id", getAuthorByIdCtrl);
authorRouter.post("/", authorSchema, validationCtrl, addAuthorCtrl);
authorRouter.post("/bookToAuthor", addBookToAuthorCtrl);
authorRouter.put("/", authorSchema, validationCtrl, updateAuthorCtrl);
authorRouter.delete("/", deleteAuthorCtrl);

export {authorRouter}
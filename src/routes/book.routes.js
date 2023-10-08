import { Router } from "express";
import {bookSchema} from "../models/Schemas/bookSchema.js";
import { validationCtrl } from "../middlewares/validator.js";
import { addBookCtrl, getBooksCtrl, getBookByIdCtrl, deleteBookCtrl, updateBookCtrl } from "../controllers/book.controllers.js";
const bookRouter = Router();

bookRouter.get("/", getBooksCtrl);
bookRouter.get("/:id", getBookByIdCtrl);
bookRouter.post("/", bookSchema, validationCtrl, addBookCtrl);
bookRouter.put("/", bookSchema, validationCtrl, updateBookCtrl);
bookRouter.delete("/:id", deleteBookCtrl);

export {bookRouter}
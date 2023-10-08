import { Router } from "express"
import { getBookByGenreCtrl, bookGenreCountCtrl,getGenresCtrl, getGenreByIdCtrl, addGenreCtrl, updateGenreCtrl, deleteGenreCtrl } from "../controllers/genre.controller.js"
import { validationCtrl } from "../middlewares/validator.js"
import { genreSchema } from "../models/Schemas/genreSchema.js"

export const genreRouter = Router()

genreRouter.get("/", getGenresCtrl);
genreRouter.get("/:id", getGenreByIdCtrl);
//Revisar el conteo y búsqueda por género
genreRouter.get("/count/:id", bookGenreCountCtrl);
genreRouter.get("/bookByGenre/:id", getBookByGenreCtrl); 

genreRouter.post("/", genreSchema, validationCtrl, addGenreCtrl);
genreRouter.put("/", genreSchema, validationCtrl, updateGenreCtrl);
genreRouter.delete("/:id", deleteGenreCtrl);

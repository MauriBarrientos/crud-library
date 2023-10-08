import express from "express";
import 'dotenv/config';
import cors from 'cors';
import fileUpload from "express-fileupload";
import { DBconnection } from "./src/config/database.js";
import { bookRouter } from "./src/routes/book.routes.js";
import { authorRouter } from "./src/routes/author.routes.js";
import { genreRouter } from "./src/routes/genre.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/book', bookRouter);
app.use('/api/author', authorRouter);
app.use('/api/genre', genreRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    DBconnection();
})
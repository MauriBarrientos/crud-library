import {Schema, model} from "mongoose";
import { addGenreToBook, deleteGenreToBook } from "./Book.js";

const genreSchema = new Schema({
    genreName: {
        type: String,
        required: true
    },
    genreDescription: {
        type: String,
        required: true
    },
    books: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Book' }]
})

export const Genre = model("Genre", genreSchema);

//Methods

export const getGenres = async () => {
    try{
        const genres = await Genre.find().populate({
            path: "books",
            select: "title"
        });
        return genres;
    }catch(error){
        console.log(error);
    }
}

export const getGenreById = async (id) => {
    try{
        const genre = await Genre.findById(id).populate({
            path: "books",
            select: "title"
        });
        return genre;
    }catch(error){
        console.log(error);
    }
}

export const addGenre = async (genre) => {
    try{
        const newGenre = await Genre.create(genre);
        addGenreToBook(author, newGenre);
        return newGenre;
    }catch(error){
        console.log(error);
    }
}

export const updateGenre = async (id, genre) => {
    try{
        const updatedGenre = await Genre.findByIdAndUpdate(id,genre);
        return updatedGenre;
    }catch(error){
        console.log(error);
    }
}

export const deleteGenre = async (id) => {
    try{
        const deletedGenre = await Genre.findByIdAndDelete(id);
        deleteGenreToBook(author, deletedGenre);
        return deletedGenre;
    }catch(error){
        console.log(error);
    }
}

export const bookGenreCount = async (genreId) => {
    try{
        const genre = await Genre.findById(genreId).populate({
            path: "books",
            select: "title"
        });
        if (genre){
            return genre.books.length;
        } else {
            return 0;
        }
    }catch(error){
        console.log(error);
    }
}

export const getBookByGenre = async (id) => {
    try{
        const genre = await Genre.findById(id).populate({
            path: "books",
            select: "title"
        });
        return genre;
    }catch(error){
        console.log(error);
    }
}
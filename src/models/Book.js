import {Schema, model } from "mongoose";
import { addBookToAuthor, deleteBookFromAuthor} from "../models/Author.js";



const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: "Genre"
    },
    description: {
        type: String, 
        required: true
    },
    publicationDate: {
        type: Number,
        required: true
    },
})

export const Book = model("Book", bookSchema);

//Methods.

export const getBooks = async () => {
    try {
        const books = await Book.find().populate([
            {
            path: "author",
            select: "name"
        },{
            path: "genre",
            select: "genreName"
        }
    ]);
        return books;
    }catch (error) {
            console.log(error);
        }
}

export const getBookById = async (id) => {
    try {
        const book = await Book.findById(id).populate({
            path: "author",
            select: "name"
        });
        return book;
        }catch (error) {
            console.log(error);
        }
}

export const addBook = async (book) => {
    try{
        const newBook = await Book.create(book);
        addBookToAuthor(author, newBook)
        return newBook;
    }catch(error){
        console.log(error);
    }
}

export const updateBook = async (id, book) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(id,book);
        return updatedBook;
    }catch(error){
        console.log(error);
    }
}

export const deleteBook = async (id) => {
    try{
        const deletedBook = await Book.findByIdAndDelete(id);
        await deleteBookFromAuthor(id, Book);
        return deletedBook;
    } catch(error){
        console.log(error);
    }
}

export const addGenreToBook = async (bookId, genreId) => {
    try{
        const book = await Book.findById(bookId);
        book.genre.push(genreId);
        const newBook = await book.save();
        return newBook;
    }catch(error){
        console.log(error);
    }
}

export const deleteGenreToBook = async (bookId, genreId) => {
    try{
        const book = await Book.findById(bookId);
        book.genre.push(genreId);
        const newBook = await book.save();
        return newBook;
    }catch(error){
        console.log(error);
    }
}


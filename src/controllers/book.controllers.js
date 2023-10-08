import { getBooks, getBookById, addBook, updateBook, deleteBook } from "../models/Book.js";

export const getBooksCtrl = async (req, res) => {
    try{
        const books = await getBooks();
        res.status(200).json(books);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const getBookByIdCtrl = async (req, res) => {
    try{
        const book = await getBookById(req.params.id);
        res.status(200).json(book);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const addBookCtrl = async (req, res) => {
    try{
        const book = await addBook(req.body);
        res.status(200).json(book);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const updateBookCtrl = async (req, res) => {
    try{
        const book = await updateBook(req.params.id, req.body);
        res.status(200).json(book);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const deleteBookCtrl = async (req, res) => {
    try{
        const book = await deleteBook(req.params.id);
        res.status(200).json(book);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}


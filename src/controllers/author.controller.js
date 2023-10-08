import {addBookToAuthor, deleteBookFromAuthor, getAuthorById, getAuthors, addAuthor, updateAuthor, deleteAuthor } from "../models/Author.js";

export const getAuthorsCtrl = async (req, res) => {
    try{
        const authors = await getAuthors();
        res.status(200).json(authors);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const getAuthorByIdCtrl = async (req, res) => {
    try{
        const author = await getAuthorById(req.params.id);
        res.status(200).json(author);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const addAuthorCtrl = async (req, res) => {
    try{
        const author = await addAuthor(req.body);
        res.status(200).json(author);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const updateAuthorCtrl = async (req, res) => {
    try{
        const author = await updateAuthor(req.params.id, req.body);
        res.status(200).json({msg: 'Updated'});
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const deleteAuthorCtrl = async (req, res) => {
    try{
        const author = await deleteAuthor(req.params.id);
        res.status(200).json({msg: 'Deleted'});
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const addBookToAuthorCtrl = async (req, res) => {
    try{
        const author = await addBookToAuthor(req.body.authorId, req.body.bookId);
        res.status(200).json(author);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const deleteBookFromAuthorCtrl = async (req, res) => {
    try{
        const author = await deleteBookFromAuthor(req.params.id, req.params.bookId);
        res.status(200).json(author);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}
import { addBookToGenre, bookGenreCount, getBookByGenre, getGenres, getGenreById, addGenre, updateGenre, deleteGenre } from "../models/Genre.js";

export const getGenresCtrl = async (req, res) => {
    try{
        const genres = await getGenres();
        res.status(200).json(genres);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const getGenreByIdCtrl = async (req, res) => {
    try{
        const genre = await getGenreById(req.params.id);
        res.status(200).json(genre);
    }catch{
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const addGenreCtrl = async (req, res) => {
    try{
        const genre = await addGenre(req.body);
        res.status(200).json(genre);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const updateGenreCtrl = async (req, res) => {
    try{
        const genre = await updateGenre(req.params.id, req.body);
        res.status(200).json(genre);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const deleteGenreCtrl = async (req, res) => {
    try{
        const genre = await deleteGenre(req.params.id);
        res.status(200).json(genre);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const getBookByGenreCtrl = async (req, res) => {
    try{
        const genre = await getBookByGenre(req.params.id);
        res.status(200).json(genre);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const bookGenreCountCtrl = async (req, res) => {
    try{
        const genre = await bookGenreCount(req.params.id);
        res.status(200).json(genre);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}

export const addBookToGenreCtrl = async (req, res) => {
    try{
        const genre = await addBookToGenre(req.body.genreId, req.body.bookId);
        res.status(200).json(genre);
    }catch(error){
        console.log(error)
        res.status(500).json(error.message);
    }
}
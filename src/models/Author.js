import {Schema, model} from "mongoose";

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type:  String,
        required: true
    },
    biography: {
        type: String, 
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

export const Author = model('Author', authorSchema)


//Methods.

export const getAuthors = async () => {
    try{
        const authors = await Author.find().populate({
            path: "books",
            select: "title"
        });
        return authors;
    }catch(error){
        console.log(error);
    }
}

export const getAuthorById = async (id) => {
    try{
        const author = await Author.findById(id).populate({
            path: "books",
            select: "title"
        });
        return author;
    }catch(error){
        console.log(error);
    }
}

export const addAuthor = async (author) => {
    try{
        const newAuthor = await Author.create(author);
        return newAuthor;
    }catch(error){
        console.log(error);
    }
}

export const updateAuthor = async (id, author) => {
    try{
        const updatedAuthor = await Author.findByIdAndUpdate(id,author);
        return updatedAuthor;
    }catch(error){
        console.log(error);
    }
}

export const deleteAuthor = async (id) => {
    try{
        const deletedAuthor = await Author.findByIdAndDelete(id);
        return deletedAuthor;
    }catch(error){
        console.log(error);
    }
}

export const addBookToAuthor = async (authorId, bookId) => {
    try{
        const author = await Author.findById(authorId);
        if (!author) {
            throw new Error('No se encontró el autor');
        }
        author.books.push(bookId);
        const newAuthor = await author.save();
        return newAuthor;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const deleteBookFromAuthor = async (id, bookId) => {
    try{
        const author = await Author.findById(id);
        const index = author.books.indexOf(bookId);
        author.books.splice(index, 1);
        const newAuthor = await author.save();
        return newAuthor;
    }catch(error){
        console.log(error);
    }
}
import { checkSchema } from "express-validator";

export const bookSchema = checkSchema({
    title: {
        in: ["body"],
        notEmpty: true
    },
    author: {
        in: ["body"],
        notEmpty: true
    },
    genre: {
        in: ["body"],
        notEmpty: true
    },
    description: {
        in: ["body"],
        notEmpty: true
    },
    publicationDate: {
        in: ["body"],
        notEmpty: true
    }
});
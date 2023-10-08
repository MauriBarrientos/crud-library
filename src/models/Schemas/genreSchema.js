import { checkSchema } from "express-validator";

export const genreSchema = checkSchema({
    genreName: 
        {
            in: ["body"],
            notEmpty: true
        },
    genreDescription:{
            in: ["body"],
            notEmpty: true
        }
})
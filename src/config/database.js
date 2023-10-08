// import mongoose from "mongoose";
import { environments } from "./environments.js";

// export const DBconnection = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }

import { connect } from 'mongoose'

export function DBconnection () {
  connect(environments.MONGO_URI)
    .then(db => console.log(`DB is connected to ${db.connection.db.databaseName}`))
    .catch(err => console.log(err))
}
// export const DBconnection = () => connect(environments.MONGO_URI);

import 'dotenv/config';

export const environments = {
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET || 'secretkey',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/dblibrary'
}

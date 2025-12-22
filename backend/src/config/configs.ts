import dotenv from 'dotenv';
import * as process from "process";
dotenv.config();

export  const configs = {
    APP_PORT: process.env.APP_PORT || 3001,
    APP_HOST:process.env.APP_HOST || 'localhost',

    URI_MONGO_DB:process.env.URI_MONGO_DB,
    URI_MONGO_DB_DBG:process.env.URI_MONGO_DB_DBG,

    JWT_ACCESS_SECRET:process.env.JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRATION:process.env.JWT_ACCESS_EXPIRATION,

    JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRATION:process.env.JWT_REFRESH_EXPIRATION,
}
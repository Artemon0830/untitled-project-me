import dotenv from 'dotenv';
import * as process from "process";
dotenv.config();

export  const configs = {
    APP_PORT: process.env.APP_PORT || 3001,
    APP_HOST:process.env.APP_HOST || 'localhost',
    URI_MONGO_DB:process.env.URI_MONGO_DB
}
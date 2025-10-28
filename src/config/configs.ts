import dotenv from 'dotenv';
import * as process from "process";
dotenv.config();

export  const configs = {
    APP_PORT: process.env.APP_PORT || 3001  }
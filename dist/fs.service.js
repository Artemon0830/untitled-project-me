"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const read = async () => {
    try {
        const pathToFile = node_path_1.default.join(__dirname, 'users.json');
        const data = await promises_1.default.readFile(pathToFile, 'utf-8');
        return data ? JSON.parse(data) : [];
    }
    catch (e) {
        console.log("Ошибка записи ", e.message);
    }
};
const write = async (users) => {
    try {
        const pathToFile = node_path_1.default.join(__dirname, 'users.json');
        await promises_1.default.writeFile(pathToFile, JSON.stringify(users));
    }
    catch (e) {
        console.log("Ошибка записи ", e.message);
    }
};
exports.default = {
    read,
    write
};

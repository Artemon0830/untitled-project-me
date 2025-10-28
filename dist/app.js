"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = require("./config/configs");
const fs_service_1 = __importDefault(require("./fs.service"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/users', async (req, res) => {
    try {
        const users = await fs_service_1.default.read();
        res.send(users);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.post('/users', async (req, res) => {
    try {
        const users = await fs_service_1.default.read();
        const { name, email, password } = req.body;
        if (!name || name.length < 3) {
            return res.status(400).send('Name must be at least 3 characters long');
        }
        if (!email || !email.includes('@')) {
            return res.status(400).send('Invalid email');
        }
        if (!password || password.length < 6) {
            return res.status(400).send('Password must be at least 6 characters long');
        }
        const id = users[users.length - 1].id + 1;
        const newUser = { id, name, email, password };
        users.push(newUser);
        await fs_service_1.default.write(users);
        res.send(newUser);
    }
    catch (e) {
        res.status(201).send(e.message);
    }
});
app.get('/users/:userId', async (req, res) => {
    try {
        const users = await fs_service_1.default.read();
        const userId = Number(req.params.userId);
        const user = users.find(user => user.id === userId);
        if (!user) {
            res.send('User not found');
        }
        res.send(user);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.put('/users/:userId', async (req, res) => {
    try {
        const users = await fs_service_1.default.read();
        const userId = Number(req.params.userId);
        const { name, email, password } = req.body;
        if (!name || name.length < 3) {
            return res.status(400).send('Name must be at least 3 characters long');
        }
        if (!email || !email.includes('@')) {
            return res.status(400).send('Invalid email');
        }
        if (!password || password.length < 6) {
            return res.status(400).send('Password must be at least 6 characters long');
        }
        const user = users.find(user => user.id === userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;
        await fs_service_1.default.write(users);
        res.send(user);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
app.delete('/users/:userId', async (req, res) => {
    try {
        const users = await fs_service_1.default.read();
        const userId = Number(req.params.userId);
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }
        users.splice(userIndex, 1);
        res.send('User deleted');
        await fs_service_1.default.write(users);
        res.sendStatus(204);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
const port = configs_1.configs.APP_PORT;
app.listen(port, async () => {
    console.log((`Server is running on http://localhost:${configs_1.configs.APP_PORT}`));
});

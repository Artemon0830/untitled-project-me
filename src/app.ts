import express,{Request,Response} from 'express';


import {configs} from "./config/configs";
import fsService from "./fs.service";


const app = express();

app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/users', async (req:Request, res:Response) => {
    try {

        const users = await fsService.read();
        res.send(users);
    }catch (e) {
        res.status(500).send(e.message);
    }
})

app.post('/users', async (req:Request, res:Response) => {
    try {
        const users = await fsService.read();
        const {name, email, password} = req.body;
        if(!name || name.length <3){
            return res.status(400).send('Name must be at least 3 characters long')
        }
        if(!email || !email.includes('@')){
            return res.status(400).send('Invalid email')
        }
        if(!password || password.length <6){
            return res.status(400).send('Password must be at least 6 characters long')
        }
        const id = users[users.length - 1].id + 1;
        const newUser = {id,name,email,password}
        users.push(newUser)
        await fsService.write(users);
        res.send(newUser)
    } catch (e) {
        res.status(201).send(e.message)
    }
})
app.get('/users/:userId', async (req:Request, res:Response) => {
    try {
        const users = await fsService.read();
        const userId = Number(req.params.userId)
    const user = users.find(user =>user.id === userId)
        if(!user){
            res.send('User not found')
        }
    res.send(user)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.put('/users/:userId',  async (req:Request, res:Response)=>{
    try {
        const users =   await fsService.read();
        const userId = Number(req.params.userId)
        const {name, email, password} = req.body;

        if(!name || name.length <3){
            return res.status(400).send('Name must be at least 3 characters long')
        }
        if(!email || !email.includes('@')){
            return res.status(400).send('Invalid email')
        }
        if(!password || password.length <6){
            return res.status(400).send('Password must be at least 6 characters long')
        }
        const user = users.find(user => user.id === userId)
        if (!user) {
            return res.status(404).send('User not found')
        }
        user.name = name || user.name
        user.email = email || user.email
        user.password = password || user.password
        await fsService.write(users);
        res.send(user)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.delete('/users/:userId',  async (req:Request, res:Response)=>{
    try {
        const users =  await fsService.read();
        const userId = Number(req.params.userId)
        const userIndex = users.findIndex(user => user.id === userId)
        if (userIndex === -1) {
            return res.status(404).send('User not found')
        }
        users.splice(userIndex, 1)
        res.send('User deleted')
        await fsService.write(users);
        res.sendStatus(204)
    } catch (e) {
        res.status(500).send(e.message)
    }

})


const port = configs.APP_PORT
app.listen(port, async () => {
    console.log((`Server is running on http://localhost:${configs.APP_PORT}`));
})
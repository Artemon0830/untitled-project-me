import express, {NextFunction, Request, Response} from 'express';
import * as mongoose from "mongoose";
import {configs} from "./config/configs";
import {userRouter} from "./routes/user.router";
import {ApiError} from "./errors/api-error";
import {authRouter} from "./routes/auth.router";
import cors from 'cors';




const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
app.use('/auth',authRouter)
app.use('/users',userRouter)
// app.get('/', (req, res) => {
//    res.send('Hello World!')
// })
//
// app.get('/users', async (req:Request, res:Response,next:NextFunction) => {
//     try {
//
//         const users = await fsService.read();
//         res.send(users);
//     }catch (e) {
//         next(e)
//     }
// })
//
// app.post('/users', async (req:Request, res:Response,next:NextFunction) => {
//     try {
//         const users = await fsService.read();
//         const {name, email, password} = req.body;
//         if(!name || name.length <3){
//            throw new Error('Name must be at least 3 characters long')
//         }
//         if(!email || !email.includes('@')){
//             throw new Error('Invalid email')
//         }
//         if(!password || password.length <6){
//             throw new Error('Password must be at least 6 characters long')
//         }
//         const id = users[users.length - 1].id + 1;
//         const newUser = {id,name,email,password}
//         users.push(newUser)
//         await fsService.write(users);
//         res.send(newUser)
//     } catch (e) {
//         next(e)
//     }
// })
// app.get('/users/:userId', async (req:Request, res:Response,next:NextFunction) => {
//     try {
//         const users = await fsService.read();
//         const userId = Number(req.params.userId)
//     const user = users.find(user =>user.id === userId)
//         if(!user){
//             res.send('User not found')
//         }
//     res.send(user)
//     } catch (e) {
//         next(e)
//     }
// })
//
// app.put('/users/:userId',  async (req:Request, res:Response,next:NextFunction)=>{
//     try {
//         const users =   await fsService.read();
//         const userId = Number(req.params.userId)
//         const {name, email, password} = req.body;
//
//         if(!name || name.length <3){
//             throw new Error('Name must be at least 3 characters long')
//         }
//         if(!email || !email.includes('@')){
//             throw new Error('Invalid email')
//         }
//         if(!password || password.length <6){
//             throw new Error('Password must be at least 6 characters long')
//         }
//         const user = users.find(user => user.id === userId)
//         if (!user) {
//             throw new Error('User not found')
//         }
//         user.name = name || user.name
//         user.email = email || user.email
//         user.password = password || user.password
//         await fsService.write(users);
//         res.send(user)
//     } catch (e) {
//         next(e)
//     }
// })
//
// app.delete('/users/:userId',  async (req:Request, res:Response,next:NextFunction)=>{
//     try {
//         const users =  await fsService.read();
//         const userId = Number(req.params.userId)
//         const userIndex = users.findIndex(user => user.id === userId)
//         if (userIndex === -1) {
//             throw new Error('User not found')
//         }
//         users.splice(userIndex, 1)
//         res.send('User deleted')
//         await fsService.write(users);
//         res.sendStatus(204)
//     } catch (e) {
//         next(e)
//     }
//
// })
app.use('*', (error:ApiError,req:Request, res:Response,next:NextFunction) => {
    res.status(500).send({message: error.message})
})
process.on("uncaughtException",(error)=>{
    console.error("uncaughtException",error.message,error.stack)
    process.exit(1)
})
const mongoUrl =
    process.env.NODE_ENV === "development"
        ? process.env.URI_MONGO_DB_DBG
        : process.env.URI_MONGO_DB;

app.listen(configs.APP_PORT, async () => {
    await mongoose.connect(mongoUrl);
    console.log((`Server is running on http://${configs.APP_HOST}:${configs.APP_PORT}`));
})
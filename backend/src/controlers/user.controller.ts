import {NextFunction, Request, Response} from "express";


import {userService} from "../service/user.service";
import {IUser} from "../interfaces/user.interface";


class UserController {
    async getUsers(req: Request, res: Response,next:NextFunction) {
        const result = await userService.getUsers();
        res.send(result)
    }

    async getUserById(req: Request, res: Response,next:NextFunction) {
        try {
            const userId = req.params.userId
            const result = await userService.getUserById(userId);
            res.send(result)
        } catch (e) {
            next(e)
        }
    }
    async updateUser(req: Request, res: Response,next:NextFunction) {
        try {
            const userId = req.params.userId;
            const dto = req.body as IUser;
            const result = await userService.updateUser(userId, dto);
            res.send(result)
        } catch (e) {
            next(e)
        }

    }

    async deleteUser(req: Request, res: Response,next:NextFunction) {
        try {
            const userId = req.params.userId;
            const result = await userService.deleteUser(userId);
            res.send(result)
        } catch (e) {
            next(e)
        }
    }

}
export const userController = new UserController();
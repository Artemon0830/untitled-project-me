import {NextFunction, Request, Response} from "express";


import {userService} from "../service/user.service";
import {IUser} from "../interfaces/user.interface";
import {ITokenPayload} from "../interfaces/token.interface";


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
    }async getMe(req: Request, res: Response,next:NextFunction) {
        try {
            const jwtPayload= req.res.locals.jwtPayload as ITokenPayload;
            console.log(jwtPayload)
            const result = await userService.getMe(jwtPayload);
            res.send(result)
        } catch (e) {
            next(e)
        }
    }

    async updateMe(req: Request, res: Response,next:NextFunction) {
        try {
           const jwtPayload = req.res.locals.jwtPayload
            const dto = req.body as IUser;
            const result = await userService.updateMe(jwtPayload, dto);
            res.send(result)
        } catch (e) {
            next(e)
        }

    }

    async deleteMe(req: Request, res: Response,next:NextFunction) {
        try {
            const jwtPayload = req.res.locals.jwtPayload
            const result = await userService.deleteMe(jwtPayload);
            res.send(result)
        } catch (e) {
            next(e)
        }
    }

}
export const userController = new UserController();
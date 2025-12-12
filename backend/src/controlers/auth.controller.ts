import {NextFunction, Request, Response} from "express";
import {ISignIn, IUser} from "../interfaces/user.interface";
import {authService} from "../service/auth.service";


class AuthController{

    async signUp(req: Request, res: Response,next:NextFunction) {
        try {
            const dto = req.body as IUser;
            const result = await authService.signUp(dto);
            res.status(201).json(result)
        } catch (e) {
            next(e)
        }
    }

    async signIn(req: Request, res: Response,next:NextFunction) {
        try {
            const dto = req.body as ISignIn;
            const result = await authService.signIn(dto);
            res.status(201).json(result)
        } catch (e) {
            next(e)
        }
    }
}
export const authController = new AuthController();
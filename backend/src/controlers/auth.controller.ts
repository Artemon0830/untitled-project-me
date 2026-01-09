import {NextFunction, Request, Response} from "express";
import {ISignIn, IUser} from "../interfaces/user.interface";
import {authService} from "../service/auth.service";
import {ITokenPayload} from "../interfaces/token.interface";


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
    public async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.res.locals.refreshToken as string;
            const jwtPayload = req.res.locals.jwtPayload as ITokenPayload;

            const result = await authService.refresh(token, jwtPayload);
            res.status(201).json(result);
        } catch (e) {
            next(e);
        }
    }
    async logout(req:Request,res:Response,next:NextFunction){
        try {
            const tokenId = req.res.locals.tokenId as string;
            const jwtPayload = req.res.locals.jwtPayload as ITokenPayload;
            const result = await authService.logout(tokenId,jwtPayload);
            res.status(201).json(result)
        }
        catch (e) {
            next(e)
        }
    }
}
export const authController = new AuthController();
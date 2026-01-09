import {Router} from "express";
import {authController} from "../controlers/auth.controller";
import {commonMiddleware} from "../middlewares/common.middleware";
import {UserValidator} from "../validators/user.validator";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

router.post('/sign-up',commonMiddleware.isBodyValid(UserValidator.signUpUserValidator),authController.signUp)
router.post('/sign-in',commonMiddleware.isBodyValid(UserValidator.signInUserValidator),authController.signIn)
router.post('/logout',authMiddleware.checkAccessToken,authController.logout)
router.post('/refresh',authMiddleware.checkRefreshToken,authController.logout)

export const authRouter = router;
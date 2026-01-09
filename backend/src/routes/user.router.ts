import {Router} from "express";
import {userController} from "../controlers/user.controller";
import {commonMiddleware} from "../middlewares/common.middleware";
import {UserValidator} from "../validators/user.validator";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

router.get('/',userController.getUsers)
router.get('/me',authMiddleware.checkAccessToken,userController.getMe)
router.put('/me',authMiddleware.checkAccessToken,commonMiddleware.isBodyValid(UserValidator.update),userController.updateMe)
router.delete('/me',authMiddleware.checkAccessToken,userController.deleteMe)
router.get('/:userId',commonMiddleware.isIdValid('userId'), userController.getUserById)

export const userRouter = router;
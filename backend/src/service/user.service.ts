import {IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";
import {ITokenPayload} from "../interfaces/token.interface";


class UserService {
    async getUsers(): Promise<IUser[]> {
        return  await userRepository.getUsers();
    }
    async getUserById(userId:string):Promise<IUser> {
        return await userRepository.getUserById(userId);
    }
    async getMe(jwtPayload:ITokenPayload):Promise<IUser> {
        return await userRepository.getUserById(jwtPayload.userId);
    }
    async updateMe(jwtPayload:ITokenPayload, dto:IUser):Promise<IUser> {
        return await userRepository.updateMe(jwtPayload.userId, dto);
    }
    async deleteMe(jwtPayload:ITokenPayload):Promise<void> {
        return await userRepository.deleteMe(jwtPayload.userId);
    }
}
export const userService = new UserService();
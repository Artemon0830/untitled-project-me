import {IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/userRepository";
import {ApiError} from "../errors/api-error";


 class UserService {
    async getUsers(): Promise<IUser[]> {
        return  await userRepository.getUsers();
    }
    async createUser(dto:Partial<IUser>):Promise<IUser> {
        if(!dto.name || dto.name.length < 3){
            throw new ApiError("Name is required and should be at least 3 characters long",404)
        }
        if(!dto.email || !dto.email.includes("@")){
            throw new ApiError("Email is required and should be valid", 400);
        }
        if (!dto.password || dto.password.length <6){
            throw new ApiError("Password is required and should be at least 6 characters long",400)
        }
        return  await userRepository.createUser(dto);
    }
    async getUserById(userId:string):Promise<IUser> {
        return await userRepository.getUserById(userId);
    }
    async updateUser(userId:string, dto:IUser):Promise<IUser> {
        if(!dto.name || dto.name.length >3){
            throw new ApiError("Name is required and should be at least 3 characters long",404)
        }
        if(!dto.email || !dto.email.includes("@")){
            throw new ApiError("Email is required and should be valid", 400);
        }
        if (!dto.password || dto.password.length <6){
            throw new ApiError("Password is required and should be at least 6 characters long",400)
        }
        return await userRepository.updateUserById(userId, dto);
    }
    async deleteUser(userId:string):Promise<void> {
        return await userRepository.deleteUserById(userId);
    }
}
export const userService = new UserService();
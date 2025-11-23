import {IUser} from "../interfaces/user.interface";
import {User} from "../models/user.model";

class UserRepository {
    public async getUsers(): Promise<IUser[]> {
        return await User.find({})
    }

    public async createUser(dto: Partial<IUser>): Promise<IUser> {
       return await User.create(dto)

    }

    public async getUserById(userId: string): Promise<IUser | null> {
      return await User.findById(userId)

    }

    public async updateUserById(userId: string, dto: IUser): Promise<IUser> {
         return await User.findByIdAndUpdate(userId,dto)
          }

    public async deleteUserById(userId: string): Promise<void> {
        return await User.findByIdAndDelete(userId)

    }
}

export const userRepository = new UserRepository();
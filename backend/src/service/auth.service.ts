import {ISignIn, IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";
import {ApiError} from "../errors/api-error";
import {passwordService} from "./password.service";
import {tokenService} from "./token.service";
import {tokenRepository} from "../repositories/token.repository";
import {ITokenPair, ITokenPayload} from "../interfaces/token.interface";


class AuthService {
    async signUp(dto:Partial<IUser>):Promise<{user:IUser,tokens:ITokenPair}> {
        const password = await passwordService.hashPassword(dto.password);
        const user = await userRepository.createUser({...dto,password});
          const tokens=await tokenService.generateTokens({userId:user._id,role:user.role});
          await tokenRepository.create({...tokens,_userId:user._id});
        return {user,tokens};
    }
    async signIn(dto:ISignIn):Promise<{user:IUser,tokens:ITokenPair}> {
        const user = await userRepository.getUserByEmail(dto.email);
        if(!user){
            throw new ApiError("User not found",404)
        }
        const isPasswordValid = await passwordService.comparePassword(dto.password,user.password);
        if(!isPasswordValid){
            throw new ApiError("Invalid password",401)
        }
        await tokenRepository.deleteByUserId(user._id)

        const tokens=await tokenService.generateTokens({userId:user._id,role:user.role});
        await tokenRepository.create({...tokens,_userId:user._id});
        return {user,tokens};
    }
    async refresh(refreshToken:string,payload:ITokenPayload):Promise<ITokenPair> {
        await tokenRepository.deleteOneByParams({refreshToken});
        const tokens = tokenService.generateTokens({userId:payload.userId,role:payload.role})
        await tokenRepository.create({...tokens,_userId:payload.userId})
        return tokens;
    }
    async logout(tokenId:string,jwtPayload:ITokenPayload)
    { const user =await userRepository.getUserById(jwtPayload.userId);
      return await  tokenRepository.deleteOneByParams({_id:tokenId,_userId:user._id})
    }

}
export const authService = new AuthService();
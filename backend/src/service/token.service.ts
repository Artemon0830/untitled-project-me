import * as jsonwebtoken from 'jsonwebtoken';
import {ITokenPair, ITokenPayload} from "../interfaces/token.interface";
import {configs} from "../config/configs";
import {ApiError} from "../errors/api-error";
import {TokenTypeEnum} from "../enums/token.type.enum";


class TokenService {
    public async generateTokens(payload: ITokenPayload): Promise<ITokenPair> {

        const accessToken = jsonwebtoken.sign(
            payload,
            configs.JWT_ACCESS_SECRET,
            { expiresIn: configs.JWT_ACCESS_EXPIRATION as jsonwebtoken.SignOptions['expiresIn'] }
        );

        const refreshToken = jsonwebtoken.sign(
            payload,
            configs.JWT_REFRESH_SECRET,
            { expiresIn: configs.JWT_REFRESH_EXPIRATION as jsonwebtoken.SignOptions['expiresIn'] }
        );

        return { accessToken, refreshToken };
    }


  public async verifyToken(token:string,type:TokenTypeEnum):Promise<ITokenPayload>{
        try {
            let secret: string;
            switch (type){
                case TokenTypeEnum.ACCESS:
              secret=configs.JWT_ACCESS_SECRET
              break;
                case TokenTypeEnum.REFRESH:
               secret =configs.JWT_REFRESH_SECRET;
               break;
                default:
                    throw new ApiError("Invalid token type", 400);
            }
            return  jsonwebtoken.verify(token,secret) as ITokenPayload;
        }catch (e){
            throw new ApiError('Invalid token',401);
        }
 }
}
export const tokenService=new TokenService();
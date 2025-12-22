import {model, Schema} from "mongoose";
import {IToken} from "../interfaces/token.interface";
import {User} from "../dataBase/userModel";



const tokenSchema = new Schema({
    accessToken: {type: String, required: true},
    refreshToken: {type: String, required: true},
    _userId: {type: Schema.Types.ObjectId, required: true, ref: User},
},
    );
export const Token = model<IToken>('tokens', tokenSchema);
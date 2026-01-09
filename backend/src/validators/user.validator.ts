import  joi from 'joi';
import {regexConstant} from "../constants/regex.constant";

export class UserValidator {
    private static userName=joi.string().min(3).max(30);
    private static  email= joi.string().lowercase().trim().regex(regexConstant.EMAIL);
    private static password= joi.string().min(6).regex(regexConstant.PASSWORD);
    private static age= joi.number().min(1).max(117);
    private static phone=joi.string().trim().regex(regexConstant.PHONE)

    public static signUpUserValidator = joi.object({
        userName:this.userName.required().messages({
            "string.min": "Username must be at least 3 characters long",
            "string.max": "Username must be at most 30 characters long",
        }),
        email:this.email.required().messages({
            "string.email": "Please provide a valid email address",
        }),
        password:this.password.required().messages({
            "string.min": "Password must be at least 6 characters long",
        }),
        age:this.age.required().messages({
            "number.min": "Age must be at least 1",
            "number.max": "Age must be at most 117"}),
        phone:this.phone

    })
    public static signInUserValidator = joi.object({
        email:this.email.required(),
        password:this.password.required()

    })
    public static update=joi.object({
        userName:this.userName,
        age:this.age,
        phone:this.phone
    })
}
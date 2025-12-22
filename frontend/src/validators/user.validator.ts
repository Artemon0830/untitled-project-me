import Joi from "joi";

const signInUserValidator = Joi.object({
        email: Joi.string().email().required().messages({
            "string.email": "Please provide a valid email address",
        }),
        password: Joi.string().min(6).required().messages({
            "string.min": "Password must be at least 6 characters long",
        })
    })

    const signUpUserValidator = Joi.object({
        userName: Joi.string().min(3).max(30).required().messages({
            "string.min": "Username must be at least 3 characters long",
            "string.max": "Username must be at most 30 characters long",
        }),
        email: Joi.string().email().required().messages({
            "string.email": "Please provide a valid email address",
        }),
        password: Joi.string().min(6).required().messages({
            "string.min": "Password must be at least 6 characters long",
        }),
        age: Joi.number().integer().min(1).max(117).optional().messages({
            "number.min": "Age must be at least 1",
            "number.max": "Age must be at most 117",
        })

    })

export {signInUserValidator, signUpUserValidator}
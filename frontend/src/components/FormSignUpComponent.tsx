import React from 'react';
import {useForm} from "react-hook-form";
import {ISignUpData} from "../models/IUserWithTokens";
import {signUp} from "../services/backend.app.servise";
import {joiResolver} from "@hookform/resolvers/joi";
import {signUpUserValidator} from "../validators/user.validator";



const FormSignUpComponent = () => {

    const {handleSubmit, register} = useForm<ISignUpData>({mode:"all",
    resolver:joiResolver(signUpUserValidator)});

    const customerData = async (data: ISignUpData) => {
      await signUp(data);
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customerData)}>
                <label>
                    username:
                    <input type="text" {...register('name')} />
                </label>

                <label>
                    email:
                    <input type="email" {...register('email')} />
                </label>

                <label>
                    age:
                    <input type="number" {...register('age')} />
                </label>

                <label>
                    password:
                    <input type="password" {...register('password')} />
                </label>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default FormSignUpComponent;

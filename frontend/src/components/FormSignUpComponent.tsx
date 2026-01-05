import React from 'react';
import {useForm} from "react-hook-form";
import {ISignUpData} from "../models/IUserWithTokens";
import {signUp} from "../services/backend.app.servise";
import {joiResolver} from "@hookform/resolvers/joi";
import {signUpUserValidator} from "../validators/user.validator";
import {useNavigate} from "react-router-dom";
import {useOutletContext} from "react-router";



const FormSignUpComponent = () => {

    const {handleSubmit, register} = useForm<ISignUpData>({mode:"all"});
    const navigate=useNavigate()
    let loadIcon = useOutletContext<(iconLink:string)=>void>();
    const customerData = async (data: ISignUpData) => {
        try {
            const response = await signUp(data);
            loadIcon(response.user.email)
            navigate(`/users/${response.user._id}`);
            console.log(data);

        } catch (e) {
            console.error(e)
        }
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

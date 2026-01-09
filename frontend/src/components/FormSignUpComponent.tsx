import React from 'react';
import {useForm} from "react-hook-form";
import {ISignUpData} from "../models/IUserWithTokens";
import {signUp} from "../services/backend.app.servise";
import {useNavigate} from "react-router-dom";
import {useOutletContext} from "react-router";


const FormSignUpComponent = () => {

    const {handleSubmit, register, formState: { errors, isValid }} = useForm<ISignUpData>({mode:"all"});
    const navigate=useNavigate()
    let loadEmail = useOutletContext<(emailLink:string)=>void>();
    const customerData = async (data: ISignUpData) => {
        try {
            const response = await signUp(data);
            loadEmail(response.user.email)
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
                    <input type="text" {...register('userName')} />
                    {errors.userName && <span>{errors.userName.message}</span>}
                </label>

                <label>
                    email:
                    <input type="email" {...register('email')} />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>

                <label>
                    age:
                    <input type="number" {...register('age')} />
                    {errors.age && <span>{errors.age.message}</span>}
                </label>

                <label>
                    password:
                    <input type="password" {...register('password')} />
                    {errors.password && <span>{errors.password.message}</span>}
                </label>

                <button type="submit" disabled={!isValid}>Sign Up</button>
            </form>
        </div>
    );
};

export default FormSignUpComponent;

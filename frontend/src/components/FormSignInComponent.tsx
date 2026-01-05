import React from "react";
import {useForm} from "react-hook-form";
import {signIn} from "../services/backend.app.servise";
import {ISignInData} from "../models/IUserWithTokens";
import {useOutletContext} from "react-router";
import {useNavigate} from "react-router-dom";

const FormSignInComponent = () => {

    const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm<ISignInData>({mode: "all",});
 let loadIcon = useOutletContext<(iconLink:string)=>void>();
     let navigate = useNavigate();
    const customerData = async (data: ISignInData) => {
        try {
            const response = await signIn(data)
            loadIcon(response.user.email)
            navigate(`/users/${response.user._id}`);
            console.log(data);
        } catch (e) {

        }
    };

    return (
        <form onSubmit={handleSubmit(customerData)}>
            <label>
                Email:
                <input type="email" {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
            </label>

            <label>
                Password:
                <input type="password" {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}
            </label>

            <button type="submit" disabled={!isValid}>
                Sign In
            </button>
        </form>
    );
};

export default FormSignInComponent;

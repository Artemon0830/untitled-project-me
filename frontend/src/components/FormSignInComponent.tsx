import React from "react";
import {useForm} from "react-hook-form";
import {signIn} from "../services/backend.app.servise";
import {ISignInData} from "../models/IUserWithTokens";

const FormSignInComponent = () => {

    const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm<ISignInData>({mode: "all",});

    const customerData = async (data: ISignInData) => {
        await signIn(data);
        console.log(data);
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

import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/users'}>users</NavLink>
            <NavLink to={'/auth/sign-up'}>register</NavLink>
            <NavLink to={'/auth/sign-in'}>login</NavLink>

        </div>
    );
};

export default HeaderComponent;
import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'/users'}>users</NavLink>
        </div>
    );
};

export default HeaderComponent;
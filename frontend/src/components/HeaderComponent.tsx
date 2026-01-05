import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../css/header.module.css"
type HeaderTypeProps={
    icon?:string
}
const HeaderComponent:FC<HeaderTypeProps> = ({icon}) => {

    return (
        <div>
            <ul className={styles.menu}>
                <li><NavLink to={'/'}>home</NavLink></li>
                <li><NavLink to={'/users'}>users</NavLink></li>
                <li><NavLink to={'/auth/sign-up'}>register</NavLink></li>
                <li><NavLink to={'/auth/sign-in'}>login</NavLink></li>
                <li><NavLink to={'articles/create'}>createArticle</NavLink></li>
                {icon && <li>{icon}</li>}
            </ul>

        </div>
    );
};

export default HeaderComponent;
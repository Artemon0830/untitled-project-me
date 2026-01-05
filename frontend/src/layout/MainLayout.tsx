import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = () => {
    const [icon, setIcon] = useState<string>('')
    const loadIcon= (iconLink:string)=>{
        setIcon(iconLink)
    }
    return (
        <div>
            <HeaderComponent icon={icon}/>
            <Outlet context={loadIcon}/>
            <FooterComponent/>

        </div>
    );
};

export default MainLayout;
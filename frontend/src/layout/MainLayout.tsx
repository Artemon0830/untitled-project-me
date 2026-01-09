import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = () => {
    const [email, setEmail] = useState<string>('')
    const loadEmail= (emailLink:string)=>{
        setEmail(emailLink)
    }
    return (
        <div>
            <HeaderComponent email={email}/>
            <Outlet context={loadEmail}/>
            <FooterComponent/>

        </div>
    );
};

export default MainLayout;
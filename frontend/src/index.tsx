import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>,
        errorElement:<ErrorPage/>,
    children:[
        { index: true, element: <div>Home page</div> },
        {path:'users',element:<UsersPage/>},
        {path:'auth/sign-up',element:<SignUpPage/>},
        {path:'auth/sign-in',element:<SignInPage/>},

    ]}
])
root.render(
 <RouterProvider router={router}/>
);
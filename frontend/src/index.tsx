import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>,
        errorElement:<ErrorPage/>,
    children:[
        {path:'users',element:<UsersPage/>},

    ]}
])
root.render(
 <RouterProvider router={router}/>
);
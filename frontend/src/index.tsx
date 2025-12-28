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
import UserPage from './pages/UserPage';
import ArticlesPage from './pages/ArticlesPage';
import FormCreateArticle from './components/FormCreateArticle';
import ArticlePage from './pages/ArticlePage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>,
        errorElement:<ErrorPage/>,
    children:[
        { index: true, element: <div>Home page</div> },
        {path:'users',element:<UsersPage/>},
        {path:'users/:userId',element:<UserPage/>},
        {path:'auth/sign-up',element:<SignUpPage/>},
        {path:'auth/sign-in',element:<SignInPage/>},
        {path:'articles',element:<ArticlesPage/>},
        {path:'articles/create',element:<FormCreateArticle/>},
        {path:'articles/:articleId',element:<ArticlePage/>}

    ]}
])
root.render(
 <RouterProvider router={router}/>
);
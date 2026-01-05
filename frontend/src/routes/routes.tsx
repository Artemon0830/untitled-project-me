import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import ArticlesPage from "../pages/ArticlesPage";
import FormCreateArticle from "../components/FormCreateArticle";
import ArticlePage from "../pages/ArticlePage";



export const routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            { index: true, element: <div>Homepage</div> },
                {path:'users',element:<UsersPage/>},
            {path:'users/:userId',element:<UserPage/>},
            {path:'auth/sign-up',element:<SignUpPage/>},
            {path:'auth/sign-in',element:<SignInPage/>},
            {path:'articles',element:<ArticlesPage/>},
            {path:'articles/create',element:<FormCreateArticle/>},
            {path:'articles/:articleId',element:<ArticlePage/>}
        ]}
])
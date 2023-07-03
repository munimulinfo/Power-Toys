import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from './../pages/ErrorPage';
import Main from "../layouts/Main";
import AllToys from "../layouts/AllToys";
import ToysDetail from "../layouts/ToysDetail";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddToys from "../pages/AddToys";
import MyToys from "../layouts/MyToys";
import UpdateToys from "../layouts/UpdateToys";
import Blogs from "../layouts/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Main></Main>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'addtoys',
                element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
            },
            {
                path: 'mytoys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: 'toyDetails/:_id', 
                element: <PrivateRoutes><ToysDetail></ToysDetail></PrivateRoutes>,
                loader:  ({ params }) => fetch(`https://power-toy-server.vercel.app/singleToys/${params._id}`)
            },
             {
                path: 'updateToys/:_id', 
                element: <PrivateRoutes><UpdateToys></UpdateToys></PrivateRoutes>,
                loader:  ({ params }) => fetch(`https://power-toy-server.vercel.app/singleToys/${params._id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
])

export default router;
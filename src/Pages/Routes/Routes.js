import { createBrowserRouter } from "react-router-dom";
import Appoinment from "../AppoinmentPage/Appoinment/Appoinment";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Home from "../HomePage/Home/Home";
import Main from "../Layouts/Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appoinment',
                element:<Appoinment></Appoinment>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ])
    },
    {
       path: '/dashboard',
       element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> 
    }
])
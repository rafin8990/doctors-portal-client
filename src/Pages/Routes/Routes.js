import { createBrowserRouter } from "react-router-dom";
import Appoinment from "../AppoinmentPage/Appoinment/Appoinment";
import Home from "../HomePage/Home/Home";
import Main from "../Layouts/Main/Main";

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
            }
        ])
    }
])
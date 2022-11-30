import { createBrowserRouter } from "react-router-dom";
import Appoinment from "../AppoinmentPage/Appoinment/Appoinment";
import MyAppointments from "../Dashboard/MyAppointments/MyAppoitnments";
import Payment from "../Dashboard/Payment";
import Home from "../HomePage/Home/Home";
import AddDoctor from "../Layouts/DashBoard/AddDoctor";
import AllUsers from "../Layouts/DashBoard/AllUsers";
import DashBoardLayout from "../Layouts/DashBoard/DashBoardLayout";
import ManageDoctors from "../Layouts/DashBoard/ManageDoctors";
import Main from "../Layouts/Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorElements from "../Shered/ErrorElements";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorElements></ErrorElements>,
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
       element:<DashBoardLayout></DashBoardLayout>,
       errorElement:<ErrorElements></ErrorElements>,
       children:[
        {
            path:'/dashboard',
            element:<PrivateRoute><MyAppointments></MyAppointments></PrivateRoute>
        },
        {
            path:'/dashboard/users',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path:'/dashboard/adddoctor',
            element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        },
        {
            path:'/dashboard/managedoctor',
            element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
        },
        {
            path:'/dashboard/payment/:id',
            element:<Payment></Payment>,
            loader:({params})=>fetch(`https://doctors-portal-server-ruby-one.vercel.app/bookings/${params.id}`)
        },
       ]
    }
])
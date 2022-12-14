import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointments/Appointment/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoutes/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/appointment",
                element: <Appointment />
            },
            
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment />
            },
            {
                path: "/dashboard/allUsers",
                element: <AdminRoute> <AllUsers /> </AdminRoute>
            },
        ]
    }
])

export default router
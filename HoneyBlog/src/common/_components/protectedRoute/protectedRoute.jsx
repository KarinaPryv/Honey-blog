import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../../../redux/userAuth/userAuthSlice";

export const ProtectedRoute = () => {
    const user = useSelector(selectUser);

    if (!user) {
        return <Navigate to={'/home'} />
    }

    return <Outlet />;
}
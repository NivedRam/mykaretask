/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const user = localStorage.getItem("authUser");
    console.log(user);

    useEffect(() => {
        if (!user) {
            console.log("no user");
            navigate("/");
        }
    }, [user, navigate]);

    return user ? children : null;
};

export default PrivateRoute;

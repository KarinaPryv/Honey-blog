import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userAuth/userAuthSlice";
import { UserInfoPanel } from "../../userInfoPanel/userInfoPanel";
import { LoginButton } from "../loginButton/loginButton";

export const AuthorizationMenuWrapper = () => {
    const user = useSelector(selectUser);
    return (
        <React.Fragment>
            {user ? (
                <UserInfoPanel />
            ) : (
                <LoginButton />
            )}
        </React.Fragment>
    )
}
import React from "react";
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from "react-redux";
import { resetBlogs } from "../../../redux/blogs/blogsSlice";
import { setCurrentPage, setQuery } from "../../../redux/posts/postsSlice";

import { setUser } from "../../../redux/userAuth/userAuthSlice";
import { useTranslation } from "../../_hooks/useTranslation";

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const translate = useTranslation();

    const onLogoutSuccess = () => {
        dispatch(setUser(null));
        dispatch(resetBlogs());
        dispatch(setQuery(''));
        dispatch(setCurrentPage(1));
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <GoogleLogout
            render={renderProps => (
                <button className="btn login-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <i className="fa-brands fa-google" />
                    <span>{translate('logOut')}</span>
                </button>
            )}
            clientId={'456524211914-kgbjsr02bhnrcisdfvkek8tm9ondvt9b.apps.googleusercontent.com'}
            onLogoutSuccess={onLogoutSuccess}
        />
    )
}

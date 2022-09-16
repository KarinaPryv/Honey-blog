import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import NotificationManager from "react-notifications/lib/NotificationManager";

import { setUser } from "../../../../redux/userAuth/userAuthSlice";
import { gapi } from "gapi-script";
import { useTranslation } from "../../../_hooks/useTranslation";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
    const dispatch = useDispatch();
    const translate = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({
                clientId: '456524211914-kgbjsr02bhnrcisdfvkek8tm9ondvt9b.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/blogger'
            });
        })
    }, []);
   
    const onSuccess = response => {
        dispatch(setUser(response.profileObj));
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        localStorage.setItem('token', JSON.stringify(response.accessToken));
        navigate('/blogs');
    };

    const onFailure = () => {
        NotificationManager.warning(translate('authError'), '', 3000);
    };

    return (
        <GoogleLogin
            render={renderProps => (
                <button className="btn login-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <i className="fa-brands fa-google" />
                    <span>{translate('logIn')}</span>
                </button>
            )}
            clientId={'456524211914-kgbjsr02bhnrcisdfvkek8tm9ondvt9b.apps.googleusercontent.com'}
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
    );
}

import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { selectTheme } from "../../../redux/userSettings/userSettingsSlice";

export const Layout = () => {
    const theme = useSelector(selectTheme);

    return (
        <React.Fragment>
            <Header />
            <main className={theme}>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    )
}
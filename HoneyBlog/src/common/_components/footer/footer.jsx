import './footer.scss';
import React from "react";
import { useSelector } from 'react-redux';

import { selectTheme } from '../../../redux/userSettings/userSettingsSlice';

export const Footer = () => {
    const theme = useSelector(selectTheme);

    return (
        <footer className={theme}>
            <div className='footer-container'>
                <h2>©HoneyBlog</h2>
            </div>
        </footer>
    )
}
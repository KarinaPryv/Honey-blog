import './header.scss';
import React from "react";
import { Link } from 'react-router-dom';

import { ThemeDropdown } from './themeDropdown/themeDropdown';
import { LanguageDropdown } from './languageDropdown/languageDropdown';
import { NavigateLinks } from './navigateLinks/navigateLinks';
import { LinksDrawer } from './linksDrawer/linksDrawer';
import { AuthorizationMenuWrapper } from './authorizationMenuWrapper/authorizationMenuWrapper';

export const Header = () => {
    return (
        <header>
            <div className="header-inner">
                <Link to="home" className='title-lg'>
                    <h1>HoneyBlog</h1>
                </Link>
                <div className='title-sm-wrapper'>
                    <LinksDrawer />
                </div>
                <div className='nav-wrapper'>
                    <div className='nav-lg'>
                        <NavigateLinks />
                    </div>
                    <div className="options-wrapper">
                        <div className='option-icon'>
                            <ThemeDropdown />
                        </div>
                        <div className='option-icon'>
                            <LanguageDropdown />
                        </div>
                    </div>
                </div>
                <AuthorizationMenuWrapper />
            </div>
        </header>
    )
}
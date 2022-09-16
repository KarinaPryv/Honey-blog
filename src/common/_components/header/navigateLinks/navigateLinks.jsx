import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectUser } from "../../../../redux/userAuth/userAuthSlice";
import { useTranslation } from "../../../_hooks/useTranslation";

export const NavigateLinks = () => {
    const translate = useTranslation();
    const user = useSelector(selectUser);

    return (
        <nav>
            <Link to="home">{translate('linkAbout')}</Link>
            {user && <Link to="blogs">{translate('linkBlogs')}</Link>}
        </nav>
    )
}
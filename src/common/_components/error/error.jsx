import React from "react";

import { useTranslation } from '../../_hooks/useTranslation'
import './error.scss'

export const Error = ({children}) => {
    const translate = useTranslation();

    return (
        <div className="errorBlock">
            <h4>{translate('error')}</h4>
            <p>{children}</p>
        </div>
    )
}
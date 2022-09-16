import React from "react";

import { useTranslation } from "../../_hooks/useTranslation";
import './emptyDataMessage.scss';

export const EmptyDataMessage = ({ messageTitle, messageText, children }) => {
    const translate = useTranslation();

    return (
        <React.Fragment>
            <hr />
            <h3>{translate(messageTitle)}</h3>
            <div className="empty-data-message">
                {translate(messageText)}
                {children}
            </div>
        </React.Fragment>
    )
}
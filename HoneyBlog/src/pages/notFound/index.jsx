import React from "react";

import { useNavigation } from "../../common/_hooks/useNavigation";
import './notFound.scss';

export const NotFound = () => {
    const navigateToPreviousPage = useNavigation();

    return (
        <div className="container not-found-container">
            <span>404</span>
            <div className="error-block">
                <h4>Oooops!</h4>
                <h5>Sorry, page not found :(</h5>
                <button onClick={navigateToPreviousPage}>&lsaquo;&lsaquo;&lsaquo;</button>
                <div className="square-lg"></div>
                <div className="square-sm"></div>
            </div>
        </div>
    )
}
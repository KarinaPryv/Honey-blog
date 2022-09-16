import React from "react";

import { formateDateToLocaleString } from "../../../common/_helper/formatDate";
import './searchPostsSuggestionItem.scss';

export const SearchPostsSuggestionsItem = ({ postsSuggestion, onSearch }) => {
    return (
        <li className='d-flex' onClick={() => onSearch(postsSuggestion.title)}>
            <div>
                <i className="fa-solid fa-angle-right" />
                <span>{postsSuggestion.title}</span>
            </div>
            <span>{formateDateToLocaleString(postsSuggestion.published)}</span>
        </li>
    )
}
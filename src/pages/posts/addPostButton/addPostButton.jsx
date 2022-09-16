import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "../../../common/_hooks/useTranslation";

import { setEditedPost, setIsPostModalVisible } from "../../../redux/posts/postsSlice";

export const AddPostButton = () => {
    const dispatch = useDispatch();
    const translate = useTranslation();

    const handleClick = () => {
        dispatch(setEditedPost(null));
        dispatch(setIsPostModalVisible(true));
    }

    return (
        <button className="btn add-post-btn" onClick={handleClick}>{translate('addPost')}</button>
    )
}
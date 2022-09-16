import React from "react";
import { useDispatch } from "react-redux";
import parse from 'html-react-parser';

import { formateDateToLocaleString } from "../../../common/_helper/formatDate";
import { useTranslation } from "../../../common/_hooks/useTranslation";
import { useNavigation } from "../../../common/_hooks/useNavigation";
import { setIsPostModalVisible } from "../../../redux/posts/postsSlice";
import { setEditedPost } from "../../../redux/posts/postsSlice";
import './postPageContent.scss';

export const PostPageContent = ({ post }) => {
    const dispatch = useDispatch();
    const translate = useTranslation();
    const navigateToPreviousPage = useNavigation();

    const handleClick = () => {
        dispatch(setIsPostModalVisible(true));
        dispatch(setEditedPost(post.id));
    }

    return (
        <React.Fragment>
            <div className="blog-title-container">
                <i className="fa-solid fa-angle-left" onClick={navigateToPreviousPage} />
                <div className="post-title">
                    <h2>{post.title}</h2>
                </div>
                <i className="fa-solid fa-pen pen-icon" onClick={handleClick}/>
            </div>
            <div className="post-content-container">
                <div className="d-flex ">
                    <div className="text-muted">
                        <span className="published">{translate('published')}</span>
                        <span>{formateDateToLocaleString(post.published)}</span>
                    </div>
                    <div>
                        <span className="text-muted">{post.author.displayName}</span>
                        <i className="fa-regular fa-user" />
                    </div>
                </div>
                <div>
                    {parse(post.content)}
                </div>
            </div>
        </React.Fragment>
    )
}
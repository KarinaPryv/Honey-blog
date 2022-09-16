import React from "react";

import { formateDateToLocaleString } from "../../../common/_helper/formatDate";
import { getCapitalLetter } from "../../../common/_helper/getCapitalLetter";
import { useTranslation } from "../../../common/_hooks/useTranslation";
import { PostEditPanel } from "../postEditPanel/postEditPanel";
import './postItem.scss';

export const PostItem = ({ post }) => {
    const translate = useTranslation();

    return (
        <div className="post-container">
            <div className="capital-letter">
                <span>{getCapitalLetter(post.title)}</span>
            </div>
            <div className="post-body">
                <div className="post-inner">
                    <h5 className={post.title ? 'post-title' : 'post-title text-muted'}>
                        {post.title ? post.title : translate('noTitle')}
                    </h5>
                    <PostEditPanel blogId={post.blog.id} postId={post.id}/>
                </div>
                <div className="post-inner post-inner-bottom">
                    <h5><span>{translate('published')}</span>{formateDateToLocaleString(post.published)}</h5>
                    <div className="d-flex">
                        <h5 className="post-author">{post.author.displayName}</h5>
                        <div className="avatar-icon">
                            <i className="fa-regular fa-user" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
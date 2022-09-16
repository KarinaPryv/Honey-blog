import React from "react";
import { Link } from "react-router-dom";

import { formateDateToLocaleString } from "../../../common/_helper/formatDate";
import { useTranslation } from "../../../common/_hooks/useTranslation";
import './blogItem.scss';

export const BlogItem = ({ blog }) => {
    const translate = useTranslation();

    return (
        <div className="blog-container">
            <div className="card-header">
                <h2>{blog.name}</h2>
                <Link className="btn" to={`/blogs/${blog.id}/posts`}>{translate('more')}</Link>
            </div>
            <div className="card-body">
                <h5>{translate('postsNumber')}{blog.posts.totalItems}</h5>
                <h5>{translate('updated')}{formateDateToLocaleString(blog.updated)}</h5>
                <h5>{translate('status')}{blog.status}</h5>
            </div>
            <div className="card-footer">
                <p>{blog.kind}</p>
                <p><span>{translate('published')}</span>{formateDateToLocaleString(blog.published)}</p>
            </div>
        </div>
    )
}
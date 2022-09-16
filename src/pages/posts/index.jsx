import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Error } from "../../common/_components/error/error";
import Spinner from "../../common/_components/spinner/spinner";
import { useTranslation } from "../../common/_hooks/useTranslation";
import { getPosts } from "../../redux/posts/postsSlice";
import { selectPosts } from "../../redux/posts/postsSlice";
import { PostModal } from "../../common/_components/postModal/postModal";
import { PostsPageContent } from "./postsPageContent/postsPageContent";
import './posts.scss'

export const Posts = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const translate = useTranslation();
    const { isLoading, error, data } = useSelector(selectPosts);
    const blogId = params.blogId;

    useEffect(() => {
        dispatch(getPosts(blogId));
    }, []);

    return (
        <div className="container">
            <h3 className="title">{translate('posts')}</h3>
            {isLoading && <Spinner />}
            {error &&  <Error>{error}</Error>}
            {data && <PostsPageContent />}
            <PostModal />
        </div>
    )
}
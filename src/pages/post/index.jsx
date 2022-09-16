import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Error } from "../../common/_components/error/error";
import { PostModal } from "../../common/_components/postModal/postModal";
import Spinner from "../../common/_components/spinner/spinner";
import { getPost, selectPost } from "../../redux/post/postSlice";
import { PostPageContent } from "./postPageContent/postPageContent";

export const Post = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const { isLoading, error, post } = useSelector(selectPost);
    const { postId, blogId } = params;

    useEffect(() => {
        dispatch(getPost({blogId, postId}));
    }, [])

    return (
        <div className="container">
            {isLoading && <Spinner />}
            {error && <Error>{error}</Error>}
            {post && <PostPageContent post={post} />}
            <PostModal />
        </div>
    )
}
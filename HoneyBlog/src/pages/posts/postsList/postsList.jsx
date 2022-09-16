import React from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "../../../common/_hooks/useTranslation";
import { selectSearchedPostsWithPagination } from "../../../redux/posts/postsSlice";
import { PostItem } from "../postItem/postItem";
import { PostsPagination } from "../postsPagination/postsPagination";

export const PostsList = () => {
    const posts = useSelector(selectSearchedPostsWithPagination);
    const translate = useTranslation();

    return (
        <React.Fragment>
            {posts.length < 1 && <h3>{translate('noSearchedPosts')}</h3>}
            <div className="posts-container w-100">
                <div>
                    {
                        posts.map((post) => {
                            return (
                                <PostItem key={post.id} post={post} />
                            )
                        })
                    }
                </div>
                {posts.length > 0 && <PostsPagination />}
            </div>
        </React.Fragment>
    )
}
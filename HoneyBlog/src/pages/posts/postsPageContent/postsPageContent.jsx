import React from "react";
import { useSelector } from "react-redux";

import { EmptyDataMessage } from "../../../common/_components/emptyDataMessage/emptyDataMessage";
import { selectPosts } from "../../../redux/posts/postsSlice";
import { AddPostButton } from "../addPostButton/addPostButton";
import { PostsList } from "../postsList/postsList";
import PostsSearchWithSuggestions from "../postsSearchWithSuggestions/postsSearchWithSuggestions";

export const PostsPageContent = () => {
    const { data } = useSelector(selectPosts);
    return (
        <React.Fragment>
            <div className="d-flex w-100">
                <PostsSearchWithSuggestions />
                <div>
                    <AddPostButton />
                </div>
            </div>
            {data.length > 0 ? (
                <PostsList />
            ) : (
                <EmptyDataMessage messageTitle='emptyPostsMessageTitle' messageText='emptyPostsMessageText' />
            )}
        </React.Fragment>
    )
}
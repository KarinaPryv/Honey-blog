import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { asyncDeletePost, setActionStatus, setEditedPost, setIsPostModalVisible } from "../../../redux/posts/postsSlice";
import DeletePopConfirm from "../deletePopConfirm/deletePopConfirm";

export const PostEditPanel = ({ blogId, postId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(asyncDeletePost({ blogId, postId }));
    }

    const handleEdit = () => {
        dispatch(setIsPostModalVisible(true))
        dispatch(setEditedPost(postId));
    }

    return (
        <React.Fragment>
            <div className="post-edit-block d-flex">
                <div className="edit-icon" onClick={handleEdit}>
                    <i className="fa-solid fa-pen" />
                </div>
                <div>
                    <DeletePopConfirm deletePost={handleDelete} />
                </div>
                <Link className="edit-icon" to={`/blogs/${blogId}/posts/${postId}`}>
                    <i className="fa-solid fa-eye" />
                </Link>
            </div>
        </React.Fragment>
    )
}
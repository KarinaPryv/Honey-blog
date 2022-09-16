import React from 'react';
import { Popconfirm } from 'antd';
import { useSelector } from 'react-redux';

import { useToggle } from '../../../common/_hooks/useToggle';
import { selectIsPostDeleting } from '../../../redux/posts/postsSlice';
import './deletePopConfirm.scss';

const DeletePopConfirm = ({ deletePost }) => {
    const { visible, toggle } = useToggle();
    const isPostDeleting = useSelector(selectIsPostDeleting);

    return (
        <Popconfirm
            title="Are you sure to delete this post?"
            visible={visible}
            okText="Yes"
            cancelText="Cancel"
            onConfirm={deletePost}
            okButtonProps={{ loading: isPostDeleting }}
            onCancel={toggle}
        >
            <div className="edit-icon" onClick={toggle}>
                <i className="fa-solid fa-trash" />
            </div>
        </Popconfirm>
    );
};

export default DeletePopConfirm;
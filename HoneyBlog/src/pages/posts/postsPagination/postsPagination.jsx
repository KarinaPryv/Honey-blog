import React from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentPage, selectSearchedPosts, setCurrentPage, setNumOfPostsPerPage } from '../../../redux/posts/postsSlice';
import './postsPagination.scss';

export const PostsPagination = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectSearchedPosts);
    const currentPage = useSelector(selectCurrentPage);

    const handleChange = (page) => {
        dispatch(setCurrentPage(page));
    }

    const handleShowSizeChange = (current, size) => {
        dispatch(setNumOfPostsPerPage(size));
    }

    return (
        <div className='posts-pagination d-flex w-100'>
            <Pagination
                total={posts.length}
                current={currentPage}
                pageSizeOptions={['5', '10']}
                defaultPageSize={5}
                showSizeChanger={true}
                onChange={handleChange}
                onShowSizeChange={handleShowSizeChange}
            />
        </div>
    )
}
import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { selectEditedPost, selectIsPostModalVisible, setIsPostModalVisible } from '../../../redux/posts/postsSlice';
import { PostForm } from '../../../pages/posts/postForm/postForm';
import { useTranslation } from '../../_hooks/useTranslation';
import { selectTheme } from '../../../redux/userSettings/userSettingsSlice';
import './postModal.scss';

export const PostModal = () => {
  const dispatch = useDispatch();
  const isPostModalVisible = useSelector(selectIsPostModalVisible);
  const editedPost = useSelector(selectEditedPost);
  const theme = useSelector(selectTheme);
  const translate = useTranslation();
  
  const handleCancel = () => {
    dispatch(setIsPostModalVisible(false));
  }

  return (
    <React.Fragment>
      <Modal
        title={editedPost ? translate('editPost') : translate('addPost')}
        destroyOnClose={true}
        visible={isPostModalVisible}
        onCancel={handleCancel}
        className="post-modal"
        footer={null}
        wrapClassName={theme}
      >
       <PostForm />
      </Modal>
    </React.Fragment>
  )
}
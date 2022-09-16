import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';

import { asyncAddPost, asyncUpdatePost, selectEditedPost, setIsPostModalVisible } from '../../../redux/posts/postsSlice';
import { useTranslation } from '../../../common/_hooks/useTranslation';
import { openNotification } from '../../../common/_helper/openNotification';
import { asyncEditPost } from '../../../redux/post/postSlice';

export const PostForm = () => {
    const { blogId } = useParams();
    const translate = useTranslation();
    const dispatch = useDispatch();
    const editedPost = useSelector(selectEditedPost);

    const [form] = Form.useForm();

    const addPost = (values) => {
        const postModel = {
            kind: "blogger#post",
            blog: {
                id: blogId,
            },
            ...values
        };
        dispatch(asyncAddPost({ blogId, postModel }));
        dispatch(setIsPostModalVisible(false));
        openNotification('success', translate('successTitle'), translate('successAddPostMessage'));
        form.resetFields();
    };

    const updatePost = (values) => {
        const postModel = {
            kind: "blogger#post",
            id: editedPost.id,
            blog: editedPost.blog,
            url: editedPost.url,
            selfLink: editedPost.selfLink,
            ...values
        };
        const postId = editedPost.id;
        dispatch(asyncUpdatePost({ blogId, postId, postModel }));
        dispatch(asyncEditPost({ blogId, postId, postModel }));
        dispatch(setIsPostModalVisible(false));
        openNotification('success', translate('successTitle'), translate('successUpdatePostMessage'));
        form.resetFields();
    }

    return (
        <Form
            form={form}
            onFinish={editedPost ? updatePost : addPost}
            initialValues={
                {
                    title: editedPost ? editedPost.title : '',
                    content: editedPost ? editedPost.content : ''
                }
            }
        >
            <Form.Item name='title'>
                <Input placeholder={translate('titlePlaceholder')} />
            </Form.Item>
            <Form.Item name='content'>
                <ReactQuill theme="snow" />
            </Form.Item>
            <Form.Item className='submit-button'>
                <Button
                    type="primary"
                    htmlType="submit"
                    className='add-post-btn'>
                    {editedPost ? translate('edit') : translate('add')}
                </Button>
            </Form.Item>
        </Form>
    )
}
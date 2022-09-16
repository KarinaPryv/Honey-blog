import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from 'antd';

import { EmptyDataMessage } from "../../../common/_components/emptyDataMessage/emptyDataMessage";
import { selectBlogs } from "../../../redux/blogs/blogsSlice";
import { BlogItem } from "../blogItem/blogItem";

export const BlogsList = () => {
    const { blogs } = useSelector(selectBlogs);

    if (blogs.length > 0) {
        return (
            <React.Fragment>
                <Row className="w-100">
                    {
                        blogs.map((blog) => {
                            return (
                                <Col xs={24} sm={24} md={24} lg={24} xl={12} key={blog.id}>
                                    <BlogItem blog={blog} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </React.Fragment>
        )
    }

    return (
        <EmptyDataMessage messageTitle='emptyBlogsMessageTitle' messageText='emptyBlogsMessageText'>
            <a className="text-orange" href="https://www.blogger.com" target="blank"> Blogger</a>
        </EmptyDataMessage>
    )
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../common/_components/error/error";
import Spinner from "../../common/_components/spinner/spinner";
import { getAllBlogs, selectBlogs } from "../../redux/blogs/blogsSlice";
import { useTranslation } from "../../common/_hooks/useTranslation";
import { BlogsList } from "./blogsList/blogsList";
import './blogs.scss';

export const Blogs = () => {
    const dispatch = useDispatch();
    const { isLoading, error, blogs } = useSelector(selectBlogs);
    const translate = useTranslation();

    useEffect(() => {
        dispatch(getAllBlogs());
    }, []);

    return (
        <div className="container">
            <h3 className="title">{translate('personalBlogs')}</h3>
            {(isLoading && !blogs) && <Spinner />}
            {error &&  <Error>{error}</Error>}
            {blogs && <BlogsList />}
        </div>
    )
}
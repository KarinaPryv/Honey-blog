import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../../_components/layout/layout";
import { Home } from "../../../pages/home";
import { Blogs } from "../../../pages/blogs"
import { Posts } from "../../../pages/posts";
import { NotFound } from "../../../pages/notFound";
import { ProtectedRoute } from "../protectedRoute/protectedRoute";
import { Post } from "../../../pages/post";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/blogs" element={<Blogs />}/>
                    <Route path="/blogs/:blogId/posts" element={<Posts />} />
                    <Route path="/blogs/:blogId/posts/:postId" element={<Post />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes >
    )
}
import { configureStore } from "@reduxjs/toolkit";

import userSettingsSlice from "./userSettings/userSettingsSlice";
import userAuthSlice from "./userAuth/userAuthSlice";
import blogsSlice from "./blogs/blogsSlice";
import postsSlice from "./posts/postsSlice";
import postSlice from "./post/postSlice";

export const store = configureStore({
    reducer: {
        userSettings: userSettingsSlice,
        userAuth: userAuthSlice,
        blogs: blogsSlice,
        posts: postsSlice,
        post: postSlice
    }
});
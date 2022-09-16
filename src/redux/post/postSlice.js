import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostById, updatePostById } from "../../common/_services/apiMethods";

export const getPost = createAsyncThunk(
    'post/getPost',
    async (data, {rejectWithValue}) => {
        const {blogId, postId} = data;
        try
        {
            const response = await getPostById(blogId, postId);

            if (response.status === 200) {
                return response.data;
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const asyncEditPost = createAsyncThunk(
    'post/asyncEditPost',
    async (data, {rejectWithValue, dispatch}) => {
        const {blogId, postId, postModel} = data;
        try 
        {
            const response = await updatePostById(blogId, postId, postModel);

            if (response.status === 200) {
                dispatch(editPost(response.data));
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: null,
        isLoading: false,
        error: null
    },
    reducers: {
        editPost: (state, action) => {
            state.post = action.payload;
        },
    },
    extraReducers: {
        [getPost.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
            state.post = null;
        },
        [getPost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [getPost.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.post = null;
        }
    }
});

export default postSlice.reducer;
export const { editPost } = postSlice.actions;

export const selectPost = state => state.post;
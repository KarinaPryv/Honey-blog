import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogsByUser } from "../../common/_services/apiMethods";

export const getAllBlogs = createAsyncThunk(
    'blogs/getAllBlogs',
    async (_, {rejectWithValue}) => {
        try 
        {
            const response = await getBlogsByUser();

            if (response.status === 200) {
                return response.data.items ? response.data.items : []; 
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const blogsSlice = createSlice ({
    name: 'blogs',
    initialState: {
        blogs : null,
        isLoading: false,
        error: null
    },
    reducers: {
        resetBlogs: (state) => {
            state.blogs = null;
        }
    },
    extraReducers: {
        [getAllBlogs.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [getAllBlogs.fulfilled]: (state, action) => {
            state.blogs = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [getAllBlogs.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.blogs = null;
        }
    }
});

export const { resetBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;

export const selectBlogs = state => state.blogs
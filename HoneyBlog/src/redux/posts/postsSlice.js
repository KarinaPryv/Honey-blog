import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { addNewPost, deletePostById, getPostsByBlogId, updatePostById } from "../../common/_services/apiMethods";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (blogId, {rejectWithValue}) => {
        try 
        {
            const response = await getPostsByBlogId(blogId);

            if (response.status === 200) {
                return response.data.items ? response.data.items : [];
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const asyncDeletePost = createAsyncThunk(
    'posts/deletePost',
    async (data, {rejectWithValue, dispatch}) => {
        const {blogId, postId} = data;
        try 
        {
            const response = await deletePostById(blogId, postId);

            if (response.status === 204) {
                dispatch(deletePost(postId));
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const asyncAddPost = createAsyncThunk(
    'posts/asyncAddPost',
    async (data, {rejectWithValue, dispatch}) => {
        const {blogId, postModel} = data;
        try 
        {
            const response = await addNewPost(blogId, postModel);

            if (response.status === 200) {
                dispatch(addPost(response.data));
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const asyncUpdatePost = createAsyncThunk(
    'posts/asyncUpdatePost',
    async (data, {rejectWithValue, dispatch}) => {
        const {blogId, postId, postModel} = data;
        try 
        {
            const response = await updatePostById(blogId, postId, postModel);

            if (response.status === 200) {
                dispatch(updatePost(response.data));
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        fetchedData: {
            data: null,
            isLoading: false,
            error: null
        },
        query: '',
        isPostDeleting: false,
        isPostModalVisible: false,
        editedPost: null,
        currentPage: 1,
        numOfPostsPerPage: 5
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setEditedPost: (state, action) => {
            state.editedPost = state.fetchedData.data.find((post) => post.id === action.payload);
        },
        setIsPostModalVisible: (state, action) => {
            state.isPostModalVisible = action.payload;
        },
        deletePost: (state, action) => {
            state.fetchedData.data = state.fetchedData.data.filter((post) => post.id !== action.payload);
        },
        addPost: (state, action) => {
            state.fetchedData.data.unshift(action.payload);
        },
        updatePost: (state, action) => {
            const postIndex = state.fetchedData.data.findIndex((post) => post.id === state.editedPost.id);
            state.fetchedData.data[postIndex] = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setNumOfPostsPerPage: (state, action) => {
            state.numOfPostsPerPage = action.payload;
        }
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.fetchedData.isLoading = true;
            state.fetchedData.error = null;
            state.fetchedData.data = null;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.fetchedData.data = action.payload;
            state.fetchedData.isLoading = false;
            state.fetchedData.error = null;
        },
        [getPosts.rejected]: (state, action) => {
            state.fetchedData.error = action.payload;
            state.fetchedData.isLoading = false;
            state.fetchedData.data = null;
        },
        [asyncDeletePost.pending]: (state) => {
            state.isPostDeleting = true;
        },
        [asyncDeletePost.fulfilled]: (state) => {
            state.isPostDeleting = false;
        },
        [asyncDeletePost.rejected]: (state) => {
            state.isPostDeleting = false;
        }
    }
});

export const { 
    setQuery, 
    deletePost, 
    addPost, 
    setEditedPost, 
    updatePost, 
    setActionStatus, 
    setIsPostModalVisible, 
    setCurrentPage, 
    setNumOfPostsPerPage 
} = postsSlice.actions;

export default postsSlice.reducer;

export const selectPosts = state => state.posts.fetchedData;
export const selectIsPostDeleting = state => state.posts.isPostDeleting;
export const selectQuery = state => state.posts.query;
export const selectEditedPost = state => state.posts.editedPost;
export const selectIsPostModalVisible = state => state.posts.isPostModalVisible;
export const selectCurrentPage = state => state.posts.currentPage;
export const selectNumOfPostsPerPage = state => state.posts.numOfPostsPerPage;

export const selectSearchedPosts = createSelector(
    [
        state => state.posts.fetchedData.data,
        state => state.posts.query
    ],
    (posts, query) => {
        if (query) {
            return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        }

        return posts;
    }
);

export const selectSearchedPostsWithPagination = createSelector(
    [selectSearchedPosts, selectCurrentPage, selectNumOfPostsPerPage],
    (searchedPosts, currentPage, numOfPostsPerPage) => {
        const startIndex = (currentPage - 1) * numOfPostsPerPage;
        const endIndex = currentPage * numOfPostsPerPage;

        return searchedPosts.slice(startIndex, endIndex);
    }
);
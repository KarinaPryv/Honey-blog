import axios from "axios";

const baseUrl = 'https://www.googleapis.com/blogger/v3';
const SELF_BLOGS = "/users/self/blogs";
const BLOGS_ENDPOINT = "/blogs";
const POSTS_ENDPOINT = "/posts";
const API_KEY = "AIzaSyCmL01pEYb0LP5NShDvoXVGJzutWlVwKPI"

export const getBlogsByUser = () => {
    return axios.get(`${baseUrl}${SELF_BLOGS}?key=${process.env.REACT_APP_API_KEY}`);
}

export const getPostsByBlogId = (blogId) => {
    return axios.get(`${baseUrl}${BLOGS_ENDPOINT}/${blogId}${POSTS_ENDPOINT}?key=${API_KEY}&maxResults=100`);
}

export const getPostById = (blogId, postId) => {
    return axios.get(`${baseUrl}${BLOGS_ENDPOINT}/${blogId}${POSTS_ENDPOINT}/${postId}?key=${API_KEY}`);
}

export const deletePostById = (blogId, postId) => {
    return axios.delete(`${baseUrl}${BLOGS_ENDPOINT}/${blogId}${POSTS_ENDPOINT}/${postId}?key=${API_KEY}`);
}

export const addNewPost = (blogId, postModel) => {
    return axios.post(`${baseUrl}${BLOGS_ENDPOINT}/${blogId}${POSTS_ENDPOINT}?key=${API_KEY}`, postModel)
}

export const updatePostById = (blogId, postId, postModel) => {
    return axios.put(`${baseUrl}${BLOGS_ENDPOINT}/${blogId}${POSTS_ENDPOINT}/${postId}?key=${API_KEY}`, postModel);
}

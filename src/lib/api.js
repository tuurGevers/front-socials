import axios from 'axios';

const API_URL = 'http://localhost:8080';  // Base API URL


// Comment related endpoints
export const getCommentsByPost = (postId) => axios.get(`${API_URL}/comment/findByPost/${postId}`);
export const createComment = (comment) => axios.post(`${API_URL}/comment/add`, comment);

// Friend related endpoints
export const getFriends = (user) => axios.get(`${API_URL}/friends/${user}`);
export const toggleFriendship = (friendDto) => axios.post(`${API_URL}/friends/toggle`, friendDto);

// Likes related endpoints
export const getLikesByPost = (postId) => axios.get(`${API_URL}/likes/${postId}`);
export const toggleLike = (likeDto) => axios.post(`${API_URL}/like`, likeDto);

// Post related endpoints
export const getPosts = () => axios.get(`${API_URL}/posts`);
export const getPostsByUser = (id) => axios.get(`${API_URL}/posts/findByUser/${id}`);
export const getPost = (id) => axios.get(`${API_URL}/posts/${id}`);
export const createPost = (postDto) => axios.post(`${API_URL}/post/add`, postDto);

// User related endpoints
export const createUser = (firstName, lastName) => axios.post(`${API_URL}/add`, { firstName, lastName });
export const listUsers = () => axios.get(`${API_URL}/list`);
export const findUser = (id) => axios.get(`${API_URL}/find/${id}`);

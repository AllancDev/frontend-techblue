import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://techblue-backend.herokuapp.com',
    baseURL: 'https://techblue-backend.herokuapp.com'
});

export default api;
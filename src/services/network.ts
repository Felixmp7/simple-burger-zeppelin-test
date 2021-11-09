import axios from 'axios';

const baseURL = process.env.BASE_URL;

const instance = axios.create({
    baseURL,
    responseType: 'json',
});

export default instance;

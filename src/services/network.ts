import ky from 'ky';

const baseURL = process.env.REACT_APP_BASE_URL;

const instance = ky.create({ prefixUrl: baseURL });

export default instance;

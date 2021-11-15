import { AxiosResponse } from 'axios';
import network from './network';

const API = {
    products: {
        getProducts: async (): Promise<AxiosResponse<any, any>> => network.get(''),
    },
};

export default API;

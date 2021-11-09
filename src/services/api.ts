/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import network from './network';

const API = {
    products: {
        getProducts: async () => network.get(''),
    },
};

export default API;

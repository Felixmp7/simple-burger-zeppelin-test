import network from './network';

const API = {
    products: {
        getProducts: async () => network.get(''),
    },
};

export default API;

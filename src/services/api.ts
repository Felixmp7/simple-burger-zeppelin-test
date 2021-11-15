import network from './network';

const API = {
    products: {
        getProducts: async (): Promise<unknown> => network.get('currentprice.json'),
    },
};

export default API;

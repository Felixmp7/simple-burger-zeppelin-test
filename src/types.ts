export type SizeProps = {
    name: string;
    extraCost: string;
}

export interface IAdditionals {
    toppings?: Array<string>;
    sodaFlavour?: string;
    size?: SizeProps;
}
export interface IProduct {
    id: number;
    image: string;
    name: string;
    description: string;
    productType: string;
    productSlug: string;
    price: string;
    status: 'inProcess' | 'done' | null;
    productOrderId?: string;
    additionals: IAdditionals;
}

export type Products = {
    products: Array<IProduct>;
    isLoading: boolean;
    getProduct: (id: number) => IProduct | undefined;
};

export interface IProductStyle { image?: string; }

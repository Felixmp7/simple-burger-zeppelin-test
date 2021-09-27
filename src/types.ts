export type CurrentAdditionalProps = {
    defaultPrice: string;
    toppings?: Array<string>;
    size?: SizeProps;
    sodaFlavour?: string;
}
export type SizeProps = {
    name: string;
    extraCost: string | null;
}

export type AdditionalTopicsProps = {
    toppings?: Array<string> | undefined;
    sodaFlavour?: string | undefined;
    size?: SizeProps | undefined;
};

export interface IProductModalProps extends IProduct {
    closeModal: () => void;
}

export interface IProduct {
    productOrderId?: string | undefined;
    id: number;
    image: string;
    name: string;
    description: string;
    productType: string;
    productSlug: string;
    price: string;
    additionals?: AdditionalTopicsProps | undefined;
}

export type Products = {
    products: Array<IProduct>;
    getProduct: (id: number) => IProduct | undefined;
};

export interface IProductStyle { image?: string; }

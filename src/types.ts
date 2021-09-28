export type UpdateToppingsProps = {
    productOrderId: string | undefined;
    toppings: string[];
};

export type UpdateFlavourProps = {
    productOrderId: string | undefined;
    newFlavour: string;
};

export type UpdateSizeProps = {
    productOrderId: string | undefined;
    productSize: SizeProps;
};

export type CurrentAdditionalProps = {
    price: string;
    toppings?: Array<string>;
    size?: SizeProps;
    sodaFlavour?: string;
}
export type SizeProps = {
    name: string;
    extraCost: string;
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
    isLoading: boolean;
    getProduct: (id: number) => IProduct | undefined;
};

export interface IProductStyle { image?: string; }

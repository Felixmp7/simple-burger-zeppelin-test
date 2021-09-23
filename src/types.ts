export interface IProduct {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
}

export type Products = {
    combos: Array<IProduct>;
    burgers: Array<IProduct>;
    others: Array<IProduct>;
};

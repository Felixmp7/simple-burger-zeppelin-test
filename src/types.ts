export type SideDishesProps = {
    toppings?: Array<{ name: string }>;
    sodaFlavours?: Array<{ name: string }>;
    sizes?: Array<{ name: string, extraCost: number | null }>;
};

export interface IProduct {
    id: number;
    image: string;
    name: string;
    description: string;
    productType: string;
    price: number;
    // sideDishes: SideDishesProps;
}

export type Products = {
    combos: Array<IProduct>;
    burgers: Array<IProduct>;
    others: Array<IProduct>;
};

export interface IProductStyle { image?: string; }

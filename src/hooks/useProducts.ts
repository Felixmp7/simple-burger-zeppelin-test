import burger from 'assets/products/burger.png';
import doubleBurger from 'assets/products/double-burger.png';
import burgerCheese from 'assets/products/burger-cheese.png';
import doubleBurgerCheese from 'assets/products/double-burger-cheese.png';
import fries from 'assets/products/fries.png';
import soda from 'assets/products/soda.png';
import { IProduct, Products } from 'types';
import { useCallback, useEffect, useState } from 'react';
import API from 'services/api';

const data = [
    {
        id: 1,
        name: 'Combo Burger',
        image: burger,
        productType: 'combo',
        productSlug: 'combo',
        description: 'Simple but jucy burger. Choose your toppings.',
        price: '9.99',
        additionals: {
            toppings: undefined,
            size: { name: 'Small', extraCost: '0.00' },
            sodaFlavour: 'Cola',
        },
    },
    {
        id: 2,
        name: 'Combo Double Burger',
        image: doubleBurger,
        productType: 'combo',
        productSlug: 'combo',
        description: 'Double jucy delicious burger. Choose your toppings.',
        price: '10.99',
        additionals: {
            toppings: undefined,
            size: { name: 'Small', extraCost: '0.00' },
            sodaFlavour: 'Cola',
        },

    },
    {
        id: 3,
        name: 'Combo Burger + Cheese',
        image: burgerCheese,
        productType: 'combo',
        productSlug: 'combo',
        description: 'What’s a burger without cheese? Choose your toppings.',
        price: '11.99',
        additionals: {
            toppings: undefined,
            size: { name: 'Small', extraCost: '0.00' },
            sodaFlavour: 'Cola',
        },

    },
    {
        id: 4,
        name: 'Combo Double Burger + Cheese',
        image: doubleBurgerCheese,
        productType: 'combo',
        productSlug: 'combo',
        description: 'What’s a burger without melted delicious DOUBLE cheese?',
        price: '15.99',
        additionals: {
            toppings: undefined,
            size: { name: 'Small', extraCost: '0.00' },
            sodaFlavour: 'Cola',
        },

    },
    {
        id: 5,
        name: 'Burger',
        image: burger,
        productType: 'burger',
        productSlug: 'burger',
        description: 'Simple but jucy burger. Choose your toppings.',
        price: '6.25',
        additionals: {
            toppings: undefined,
        },
    },
    {
        id: 6,
        name: 'Double Burger',
        image: doubleBurger,
        productType: 'burger',
        productSlug: 'burger',
        description: 'Double jucy delicious burger. Choose your toppings.',
        price: '8.49',
        additionals: {
            toppings: undefined,
        },
    },
    {
        id: 7,
        name: 'Burger + Cheese',
        image: burgerCheese,
        productType: 'burger',
        productSlug: 'burger',
        description: 'What’s a burger without cheese? Choose your toppings.',
        price: '9.00',
        additionals: {
            toppings: undefined,
        },
    },
    {
        id: 8,
        name: 'Double Burger + Cheese',
        image: doubleBurgerCheese,
        productType: 'burger',
        productSlug: 'burger',
        description: 'What’s a burger without melted delicious DOUBLE cheese?',
        price: '13.00',
        additionals: {
            toppings: undefined,
        },
    },
    {
        id: 9,
        name: 'Fries',
        image: fries,
        productType: 'other',
        productSlug: 'fries',
        description: 'Crunchy unique fries.',
        price: '3.49',
        additionals: {
            size: { name: 'Small', extraCost: '0.00' },
        },
    },
    {
        id: 10,
        name: 'Soda',
        image: soda,
        productType: 'other',
        productSlug: 'soda',
        description: 'Accompany your burger with a soda.',
        price: '1.00',
        additionals: {
            sodaFlavour: 'Cola',
        },
    },
];

const useProducts = (): Products => {
    const [products, setProducts] = useState<Array<IProduct>>([]);

    const getProduct = useCallback((id: number) => products.find((product) => product.id === id), [products]);

    const handleLoadProducts = useCallback(async () => {
        await API.products.getProducts();
        setProducts(data);
    }, []);

    useEffect(() => { handleLoadProducts(); }, [handleLoadProducts]);

    return {
        products,
        isLoading: products.length === 0,
        getProduct,
    };
};

export default useProducts;

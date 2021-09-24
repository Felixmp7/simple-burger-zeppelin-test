import burger from 'assets/products/burger.png';
import doubleBurger from 'assets/products/double-burger.png';
import burgerCheese from 'assets/products/burger-cheese.png';
import doubleBurgerCheese from 'assets/products/double-burger-cheese.png';
import fries from 'assets/products/fries.png';
import soda from 'assets/products/soda.png';
import { Products } from 'types';

const data = {
    combos: [
        {
            id: 1,
            name: 'Combo Burger',
            image: burger,
            productType: 'combo',
            description: 'Simple but jucy burger. Choose your toppings.',
            price: 9.99,
        },
        {
            id: 2,
            name: 'Combo Double Burger',
            image: doubleBurger,
            productType: 'combo',
            description: 'Double jucy delicious burger. Choose your toppings.',
            price: 10.99,

        },
        {
            id: 3,
            name: 'Combo Burger + Cheese',
            image: burgerCheese,
            productType: 'combo',
            description: 'What’s a burger without cheese? Choose your toppings.',
            price: 11.99,

        },
        {
            id: 4,
            name: 'Combo Double Burger + Cheese',
            image: doubleBurgerCheese,
            productType: 'combo',
            description: 'What’s a burger without melted delicious DOUBLE cheese?',
            price: 15.99,

        },
    ],
    burgers: [
        {
            id: 5,
            name: 'Burger',
            image: burger,
            productType: 'burger',
            description: 'Simple but jucy burger. Choose your toppings.',
            price: 6.25,
        },
        {
            id: 6,
            name: 'Double Burger',
            image: doubleBurger,
            productType: 'burger',
            description: 'Double jucy delicious burger. Choose your toppings.',
            price: 8.49,
        },
        {
            id: 7,
            name: 'Burger + Cheese',
            image: burgerCheese,
            productType: 'burger',
            description: 'What’s a burger without cheese? Choose your toppings.',
            price: 9.00,
        },
        {
            id: 8,
            name: 'Double Burger + Cheese',
            image: doubleBurgerCheese,
            productType: 'burger',
            description: 'What’s a burger without melted delicious DOUBLE cheese?',
            price: 13.00,
        },
    ],
    others: [
        {
            id: 9,
            name: 'Fries',
            image: fries,
            productType: 'fries',
            description: 'Crunchy unique fries.',
            price: 3.49,
        },
        {
            id: 10,
            name: 'Soda',
            image: soda,
            productType: 'sodas',
            description: 'Accompany your burger with a soda.',
            price: 1.00,
        },
    ],
};

const useProducts = (): Products => {
    const { combos, burgers, others } = data;
    return {
        combos,
        burgers,
        others,
    };
};

export default useProducts;

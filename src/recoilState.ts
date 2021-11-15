import { atom } from 'recoil';
import { IProduct } from 'types';

// const initialState = [
//     {
//         id: 1,
//         name: 'Combo Burger',
//         image: '',
//         productType: 'combo',
//         productSlug: 'combo',
//         description: 'Simple but jucy burger. Choose your toppings.',
//         price: '9.99',
//         status: 'pending',
//         additionals: {
//             toppings: ['Letucce', 'Tomato', 'Bread'],
//             size: { name: 'Small', extraCost: '0.00' },
//             sodaFlavour: 'Cola',
//         },
//         productOrderId: 'oweyb2cn9pb',
//     },
//     {
//         id: 2,
//         name: 'Combo Burger Double',
//         image: '',
//         productType: 'combo',
//         productSlug: 'combo',
//         description: 'Double jucy delicious burger. Choose your toppings.',
//         price: '10.99',
//         status: 'pending',
//         additionals: {
//             toppings: ['Tomato', 'Bread'],
//             size: { name: 'Big', extraCost: '2.00' },
//             sodaFlavour: 'Cola',
//         },
//         productOrderId: 'alksfdjas4332',
//     },
//     {
//         id: 5,
//         name: 'Burger',
//         image: '',
//         productType: 'burger',
//         productSlug: 'burger',
//         description: 'Simple but jucy burger. Choose your toppings.',
//         price: '6.25',
//         status: 'pending',
//         additionals: {
//             toppings: [],
//             size: undefined,
//             sodaFlavour: undefined,
//         },
//         productOrderId: 'asdasfewre32',
//     },
//     {
//         id: 5,
//         name: 'Soda',
//         image: '',
//         productType: 'other',
//         productSlug: 'soda',
//         description: 'Accompany your burger with a soda.',
//         price: '1.00',
//         status: 'pending',
//         additionals: {
//             toppings: [],
//             size: undefined,
//             sodaFlavour: 'Cola',
//         },
//         productOrderId: 'sshdgdgsh33',
//     },
// ];

const shopListAtom = atom<Array<IProduct>>({ key: 'shopList', default: [] });

export default shopListAtom;

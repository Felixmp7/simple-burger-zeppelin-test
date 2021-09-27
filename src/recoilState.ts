import { atom } from 'recoil';
import { IProduct } from 'types';

const shopListAtom = atom<Array<IProduct>>({ key: 'shopList', default: [] });

export default shopListAtom;

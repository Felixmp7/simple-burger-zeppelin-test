import { atom } from 'recoil';

export const shopListAtom = atom({ key: 'shopList', default: [] });
export const shopCountAtom = atom({ key: 'shopCount', default: '0.00' });

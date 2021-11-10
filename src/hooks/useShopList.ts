/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SetterOrUpdater, useRecoilState } from 'recoil';
import shopListAtom from 'recoilState';
import {
    IProduct, UpdateFlavourProps, UpdateSizeProps, UpdateToppingsProps,
} from 'types';
import produce from 'immer';

type ShopListProps = {
    shopList: Array<IProduct>;
    getTotalPrice: () => string;
    setShopList: SetterOrUpdater<Array<IProduct>>;
    handleAddOrRemove: (product: IProduct, isRemove: boolean) => void;
    updateProductSize: ({ productOrderId, productSize }: UpdateSizeProps) => void;
    updateSodaFlavour: ({ productOrderId, newFlavour }: UpdateFlavourProps) => void;
    updateToppings: ({ productOrderId, toppings }: UpdateToppingsProps) => void;
};

const useShopList = (): ShopListProps => {
    const [shopList, setShopList] = useRecoilState(shopListAtom);

    const handleAddOrRemove = (product: IProduct, isRemove: boolean): void => {
        const shopListUpdated = produce(shopList, (draft) => {
            if (isRemove) {
                draft.filter(({ productOrderId }) => productOrderId !== product.productOrderId);
            } else draft.push(product);
        });
        setShopList(shopListUpdated);
    };

    const getTotalPrice = () => {
        const total = shopList.reduce((totalPrice, item) => {
            const accum = parseFloat(item.price) + parseFloat(item.additionals?.size?.extraCost || '0.00');
            return totalPrice + accum;
        }, 0);
        return total.toFixed(2);
    };

    const updateProductSize = ({ productOrderId, productSize } : UpdateSizeProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals!.size = productSize;
            }
        });

        setShopList(shopListUpdated);
    };

    const updateSodaFlavour = ({ productOrderId, newFlavour } : UpdateFlavourProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals!.sodaFlavour = newFlavour;
            }
        });

        setShopList(shopListUpdated);
    };

    const updateToppings = ({ productOrderId, toppings } : UpdateToppingsProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals!.toppings = toppings;
            }
        });

        setShopList(shopListUpdated);
    };

    return {
        shopList,
        getTotalPrice,
        setShopList,
        handleAddOrRemove,
        updateProductSize,
        updateSodaFlavour,
        updateToppings,
    };
};

export default useShopList;

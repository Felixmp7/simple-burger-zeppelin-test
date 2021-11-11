import { SetterOrUpdater, useRecoilState } from 'recoil';
import produce from 'immer';
import shopListAtom from 'recoilState';
import {
    IProduct, UpdateFlavourProps, UpdateSizeProps, UpdateToppingsProps,
} from 'types';

interface IShoppingCartHookProps {
    shopList: Array<IProduct>;
    getTotalPrice: () => string;
    setShopList: SetterOrUpdater<Array<IProduct>>;
    handleAddOrRemove: (product: IProduct) => void;
    updateProductSize: ({ productOrderId, productSize }: UpdateSizeProps) => void;
    updateSodaFlavour: ({ productOrderId, newFlavour }: UpdateFlavourProps) => void;
    updateToppings: ({ productOrderId, toppings }: UpdateToppingsProps) => void;
}

// interface UpdateAdditionalProps {
//     productOrderId: string;
//     additional: {
//         slug: 'toppings' | 'size' | 'sodaFlavour';
//         value: Array<string> | string | SizeProps;
//     }
// }

const useShoppingCart = (): IShoppingCartHookProps => {
    const [shopList, setShopList] = useRecoilState(shopListAtom);

    const handleAddOrRemove = (product: IProduct): void => {
        const shopListUpdated = produce(shopList, (draft) => {
            const indexOfOrder = draft.findIndex(({ productOrderId }) => productOrderId === product.productOrderId);
            if (indexOfOrder === -1) {
                draft.push(product);
            } else {
                draft.splice(indexOfOrder, 1);
            }
        });
        setShopList(shopListUpdated);
    };

    const getTotalPrice = () => {
        const total = shopList.reduce((totalAccum, { price, additionals: { size } }) => {
            const subTotal = parseFloat(price) + parseFloat(size?.extraCost || '0.00');

            return totalAccum + subTotal;
        }, 0);
        return total.toFixed(2);
    };

    const updateProductSize = ({ productOrderId, productSize } : UpdateSizeProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals.size = productSize;
            }
        });

        setShopList(shopListUpdated);
    };

    // const updateAdditional = ({ productOrderId, additional: { slug, value } }: UpdateAdditionalProps) => {
    //     const shopListUpdated = produce(shopList, (draft) => {
    //         const index = draft.findIndex((item) => item.productOrderId === productOrderId);
    //         if (index !== -1) {
    //             draft[index].additionals[slug] = value;
    //         }
    //     });

    //     setShopList(shopListUpdated);
    // };

    const updateSodaFlavour = ({ productOrderId, newFlavour } : UpdateFlavourProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals.sodaFlavour = newFlavour;
            }
        });

        setShopList(shopListUpdated);
    };

    const updateToppings = ({ productOrderId, toppings } : UpdateToppingsProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals.toppings = toppings;
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

export default useShoppingCart;

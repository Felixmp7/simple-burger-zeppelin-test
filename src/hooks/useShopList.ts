import { SetterOrUpdater, useRecoilState } from 'recoil';
import shopListAtom from 'recoilState';
import {
    IProduct, UpdateFlavourProps, UpdateSizeProps, UpdateToppingsProps,
} from 'types';

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
        const result: Array<IProduct> = [...shopList];
        if (isRemove) {
            const orderIndex = shopList.findIndex(({ productOrderId }) => productOrderId === product.productOrderId);
            result.splice(orderIndex, 1);
        } else {
            result.push(product);
        }
        setShopList(result);
    };

    const getTotalPrice = () => {
        const total = shopList.reduce((totalPrice, item) => {
            const accum = parseFloat(item.price) + parseFloat(item.additionals?.size?.extraCost || '0.00');
            return totalPrice + accum;
        }, 0);
        return total.toFixed(2);
    };

    const updateProductSize = ({ productOrderId, productSize } : UpdateSizeProps) => {
        const shopListUpdated = shopList.map((item) => {
            if (item.productOrderId === productOrderId) {
                return {
                    ...item,
                    additionals: {
                        ...item.additionals,
                        size: productSize,
                    },
                };
            }
            return item;
        });

        setShopList(shopListUpdated);
    };

    const updateSodaFlavour = ({ productOrderId, newFlavour } : UpdateFlavourProps) => {
        const shopListUpdated = shopList.map((item) => {
            if (item.productOrderId === productOrderId) {
                return {
                    ...item,
                    additionals: {
                        ...item.additionals,
                        sodaFlavour: newFlavour,
                    },
                };
            }
            return item;
        });

        setShopList(shopListUpdated);
    };

    const updateToppings = ({ productOrderId, toppings } : UpdateToppingsProps) => {
        const shopListUpdated = shopList.map((item) => {
            if (item.productOrderId === productOrderId) {
                return {
                    ...item,
                    additionals: {
                        ...item.additionals,
                        toppings,
                    },
                };
            }
            return item;
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

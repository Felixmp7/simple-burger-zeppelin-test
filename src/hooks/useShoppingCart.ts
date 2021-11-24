/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SetterOrUpdater, useRecoilState } from 'recoil';
import produce from 'immer';
import shopListAtom from 'recoilState';
import { IProduct, SizeProps } from 'types';
import { doneStatus } from '../constants';

interface IUpdateProps { productOrderId?: string; }

interface IUpdateFlavourProps extends IUpdateProps { newFlavour: string; }

interface IUpdateSizeProps extends IUpdateProps { newSize: SizeProps; }

interface IUpdateToppingsProps extends IUpdateProps { topping: string; }

interface IUpdateStatusProps extends IUpdateProps { status: string; }

interface IProps extends IProduct {
    callback: () => void;
    toppingsAdded: string[];
    sizeSelected?: SizeProps;
    sodaFlavourSelected?: string;
}

interface IShoppingCartHookProps {
    shopList: Array<IProduct>;
    deliveryTime: number;
    getTotalPrice: () => string;
    setShopList: SetterOrUpdater<Array<IProduct>>;
    handleAddOrRemove: (product: IProduct) => void;
    updateProductSize: ({ productOrderId, newSize }: IUpdateSizeProps) => void;
    updateSodaFlavour: ({ productOrderId, newFlavour }: IUpdateFlavourProps) => void;
    updateToppings: ({ productOrderId, topping }: IUpdateToppingsProps) => void;
    getProductSubtotal: (productOrderId: string) => string;
    addNewProduct: (params: IProps) => void;
    updateStatus: ({ productOrderId, status }: IUpdateStatusProps) => void;
}

const useShoppingCart = (): IShoppingCartHookProps => {
    const [shopList, setShopList] = useRecoilState(shopListAtom);

    const handleAddOrRemove: IShoppingCartHookProps['handleAddOrRemove'] = (product) => {
        setShopList(produce((draft) => {
            const indexOfOrder = draft.findIndex(({ productOrderId }) => productOrderId === product.productOrderId);
            if (indexOfOrder === -1) {
                draft.push(product);
            } else {
                draft.splice(indexOfOrder, 1);
            }
        }));
    };

    const addNewProduct = ({ callback, price, ...rest }: IProps) => {
        const newProduct = {
            ...rest,
            price,
            productOrderId: Math.random().toString(36).slice(2),
            status: 'pending',
            additionals: {
                toppings: rest.toppingsAdded,
                size: rest.sizeSelected,
                sodaFlavour: rest.sodaFlavourSelected,
            },
        };
        handleAddOrRemove(newProduct);
        callback();
    };

    const getTotalPrice = () => {
        const total = shopList.reduce((totalAccum, { price, additionals: { size } }) => {
            const subTotal = parseFloat(price) + parseFloat(size?.extraCost || '0.00');

            return totalAccum + subTotal;
        }, 0);
        return total.toFixed(2);
    };

    const getProductSubtotal = (productOrderId: string): string => {
        const found = shopList.find((product) => product.productOrderId === productOrderId);
        if (found) {
            const subTotal = parseFloat(found?.price) + parseFloat(found?.additionals.size?.extraCost || '0.00');
            return subTotal.toFixed(2);
        }
        return '-';
    };

    const updateProductSize = ({ productOrderId, newSize } : IUpdateSizeProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals.size = newSize;
            }
        });

        setShopList(shopListUpdated);
    };

    const updateSodaFlavour = ({ productOrderId, newFlavour } : IUpdateFlavourProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].additionals.sodaFlavour = newFlavour;
            }
        });

        setShopList(shopListUpdated);
    };

    const updateToppings = ({ productOrderId, topping } : IUpdateToppingsProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                const toppingIndex = draft[index].additionals.toppings!.indexOf(topping);
                if (toppingIndex === -1) {
                    draft[index].additionals.toppings?.push(topping);
                } else {
                    draft[index].additionals.toppings?.splice(toppingIndex, 1);
                }
            }
        });

        setShopList(shopListUpdated);
    };
    const updateStatus = ({ productOrderId, status } : IUpdateStatusProps) => {
        const shopListUpdated = produce(shopList, (draft) => {
            const index = draft.findIndex((item) => item.productOrderId === productOrderId);
            if (index !== -1) {
                draft[index].status = status;
            }
        });

        setShopList(shopListUpdated);
    };

    const getDeliveryTime = () => shopList.reduce((totalAccum, { deliveryTime, status }) => (status === doneStatus ? totalAccum : totalAccum + deliveryTime), 0);

    return {
        shopList,
        deliveryTime: getDeliveryTime(),
        addNewProduct,
        getTotalPrice,
        setShopList,
        handleAddOrRemove,
        updateProductSize,
        updateSodaFlavour,
        updateToppings,
        updateStatus,
        getProductSubtotal,
    };
};

export default useShoppingCart;

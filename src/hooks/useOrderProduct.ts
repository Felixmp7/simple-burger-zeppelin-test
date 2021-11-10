import { Dispatch, SetStateAction } from 'react';
import { IProduct, SizeProps } from 'types';
import produce from 'immer';
import useAdditionals from './useAdditionals';
import useShopList from './useShopList';

interface IOrderHookProps {
    totalProductPrice: string;
    sizeSelected: SizeProps | undefined;
    toppingsAdded: string[];
    handleSodaFlavour: Dispatch<SetStateAction<string>>;
    sodaFlavourSelected: string | undefined;
    handleTopping: (topping: string) => void;
    handleExtraCost: ({ extraCost }: SizeProps) => void;
    addToCart: () => void;
}

interface IOrderProduct extends IProduct {
    closeModal: () => void;
}

const useOrderProduct = (productProps: IOrderProduct): IOrderHookProps => {
    const { closeModal, price, additionals } = productProps;
    const { handleAddOrRemove } = useShopList();
    const {
        getTotalPrice, toppingsAdded, sizeSelected, sodaFlavourSelected, handleTopping, handleExtraCost, handleSodaFlavour,
    } = useAdditionals({ ...additionals, price });

    const addToCart = () => {
        const newProduct = produce(productProps, (draft) => {
            draft.price = price;
            draft.productOrderId = Math.random().toString(36).slice(2);
            draft.additionals = {
                toppings: toppingsAdded.length ? toppingsAdded : undefined,
                size: sizeSelected || undefined,
                sodaFlavour: sodaFlavourSelected || undefined,
            };
        });
        handleAddOrRemove(newProduct);
        closeModal();
    };

    return {
        totalProductPrice: getTotalPrice(),
        sizeSelected,
        toppingsAdded,
        handleSodaFlavour,
        sodaFlavourSelected,
        handleExtraCost,
        handleTopping,
        addToCart,
    };
};

export default useOrderProduct;

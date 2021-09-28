/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react';
import { IProduct, SizeProps } from 'types';
import useAdditionals from './useAdditionals';
import useShopList from './useShopList';

type OrderProductProps = {
    totalProductPrice: string,
    sizeSelected: SizeProps | undefined,
    toppingsAdded: string[],
    handleSodaFlavour: Dispatch<SetStateAction<string>> | any,
    sodaFlavourSelected: string | undefined,
    handleTopping: (topping: string) => void;
    handleExtraCost: ({ extraCost }: SizeProps) => void;
    addToCart: () => void,
    closeModal: () => void,
}

interface IOrderProduct extends IProduct {
    closeModal: () => void;
}

const useOrderProduct = (productProps: IOrderProduct): OrderProductProps => {
    const { handleAddOrRemove } = useShopList();
    const {
        closeModal, price, additionals, ...rest
    } = productProps;
    const {
        getTotalPrice, toppingsAdded, sizeSelected, sodaFlavourSelected, handleTopping, handleExtraCost, handleSodaFlavour,
    } = useAdditionals({ ...additionals, price });

    const addToCart = () => {
        const isRemove = false;
        const newProduct = {
            ...rest,
            price,
            productOrderId: Math.random().toString(36).slice(2),
            additionals: {
                toppings: toppingsAdded.length ? toppingsAdded : undefined,
                size: sizeSelected || undefined,
                sodaFlavour: sodaFlavourSelected || undefined,
            },
        };
        handleAddOrRemove(newProduct, isRemove);
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
        closeModal,
    };
};

export default useOrderProduct;

import { IProduct, SizeProps } from 'types';
import useAdditionals from './useAdditionals';
import useShopList from './useShopList';

type OrderProps = {
    totalProductPrice: string;
    toppingsAdded: string[];
    sizeSelected: SizeProps | undefined;
    sodaFlavourSelected: string | undefined;
    removeOfOrder: () => void;
    updateSize: (newSize: SizeProps) => void;
    updateSoda: (newFlavour: string) => void;
    updateToppingsAdded: (topping: string) => void;
}

const useOrderConfirmation = (product: IProduct): OrderProps => {
    const { additionals, productOrderId, price } = product;
    const {
        handleAddOrRemove, updateProductSize, updateSodaFlavour, updateToppings,
    } = useShopList();

    const {
        getTotalPrice, toppingsAdded, sizeSelected, sodaFlavourSelected,
        handleTopping, handleExtraCost, handleSodaFlavour,
    } = useAdditionals({ ...additionals, price });

    const removeOfOrder = () => handleAddOrRemove(product);

    const updateSize = (newSize: SizeProps) => {
        handleExtraCost(newSize);
        updateProductSize({ productOrderId, productSize: newSize });
    };

    const updateSoda = (newFlavour: string) => {
        handleSodaFlavour(newFlavour);
        updateSodaFlavour({ productOrderId, newFlavour });
    };

    const updateToppingsAdded = (topping: string) => {
        handleTopping(topping);
        updateToppings({ productOrderId, toppings: toppingsAdded });
    };

    return {
        totalProductPrice: getTotalPrice(),
        toppingsAdded,
        sizeSelected,
        sodaFlavourSelected,
        removeOfOrder,
        updateSize,
        updateSoda,
        updateToppingsAdded,
    };
};

export default useOrderConfirmation;

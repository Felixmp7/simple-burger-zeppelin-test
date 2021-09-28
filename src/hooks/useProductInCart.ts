import { SizeProps } from 'types';
import useAdditionals from './useAdditionals';
import useShopList from './useShopList';

const useProductInCart = (product: any) => {
    const { additionals, productOrderId, price } = product;
    const {
        handleAddOrRemove, updateProductSize, updateSodaFlavour, updateToppings,
    } = useShopList();

    const {
        getTotalPrice, toppingsAdded, sizeSelected, sodaFlavourSelected,
        handleTopping, handleExtraCost, handleSodaFlavour,
    } = useAdditionals({ ...additionals, price });

    const removeOfCart = () => {
        const isRemove = true;
        handleAddOrRemove(product, isRemove);
    };

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
        removeOfCart,
        updateSize,
        updateSoda,
        updateToppingsAdded,
    };
};

export default useProductInCart;

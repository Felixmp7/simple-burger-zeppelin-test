import { IProduct, SizeProps } from 'types';
import useShoppingCart from './useShoppingCart';

interface IReturnedProps { addToCart: () => void; }

interface IProps extends IProduct {
    closeModal: () => void;
    toppingsAdded: string[];
    sizeSelected?: SizeProps;
    sodaFlavourSelected?: string;
}

const useAddProduct = ({
    closeModal,
    price,
    toppingsAdded,
    sizeSelected,
    sodaFlavourSelected,
    ...rest
}: IProps): IReturnedProps => {
    const { handleAddOrRemove } = useShoppingCart();

    const addToCart = () => {
        const newProduct = {
            ...rest,
            price,
            productOrderId: Math.random().toString(36).slice(2),
            status: 'pending',
            additionals: {
                toppings: toppingsAdded,
                size: sizeSelected,
                sodaFlavour: sodaFlavourSelected,
            },
        };
        handleAddOrRemove(newProduct);
        closeModal();
    };

    return { addToCart };
};

export default useAddProduct;

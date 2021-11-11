import { IProduct, SizeProps } from 'types';
import produce from 'immer';
import useShoppingCart from './useShoppingCart';

interface IReturnedProps { addToCart: () => void; }

interface IProps extends IProduct {
    closeModal: () => void;
    toppingsAdded: string[];
    sizeSelected?: SizeProps;
    sodaFlavourSelected?: string;
}

const useAddProduct = (props: IProps): IReturnedProps => {
    const { handleAddOrRemove } = useShoppingCart();
    const {
        closeModal, price, toppingsAdded, sizeSelected, sodaFlavourSelected,
    } = props;

    const addToCart = () => {
        const newProduct = produce(props, (draft) => {
            draft.price = price;
            draft.productOrderId = Math.random().toString(36).slice(2);
            draft.additionals = {
                toppings: toppingsAdded,
                size: sizeSelected,
                sodaFlavour: sodaFlavourSelected,
            };
        });
        handleAddOrRemove(newProduct);
        closeModal();
    };

    return { addToCart };
};

export default useAddProduct;

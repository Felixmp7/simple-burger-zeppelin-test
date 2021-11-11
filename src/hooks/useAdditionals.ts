import { Dispatch, SetStateAction, useState } from 'react';
import { IAdditionals, SizeProps } from 'types';

interface IReturnedProps {
    toppingsAdded: Array<string> | [];
    sizeSelected: SizeProps | undefined;
    sodaFlavourSelected: string | undefined;
    handleSodaFlavour: Dispatch<SetStateAction<string>> | any;
    getTotalPrice: () => string;
    handleTopping: (topping: string) => void;
    handleExtraCost: ({ extraCost }: SizeProps) => void;
}

interface IProps extends IAdditionals {
    price: string;
}

const useAdditionals = ({
    price, toppings, size, sodaFlavour,
}: IProps): IReturnedProps => {
    const [toppingsAdded, setToppingsAdded] = useState(toppings || []);
    const [sizeSelected, setSizeSelected] = useState(size);
    const [sodaFlavourSelected, setSodaFlavourSelected] = useState(sodaFlavour);

    const handleTopping = (topping: string): void => {
        let newToppingsList = [];
        const alreadySelected = toppingsAdded.some((item) => item === topping);

        if (alreadySelected) {
            newToppingsList = toppingsAdded.filter((item) => item !== topping);
        } else {
            newToppingsList = [...toppingsAdded, topping];
        }
        setToppingsAdded([...newToppingsList]);
    };

    const handleExtraCost = (newSize: SizeProps) => {
        if (sizeSelected?.name !== newSize.name) {
            setSizeSelected(newSize);
        }
    };

    const getTotalPrice = () => {
        const extraCost = parseFloat(sizeSelected?.extraCost || '0.00');
        return (parseFloat(price) + extraCost).toFixed(2);
    };

    return {
        toppingsAdded,
        sizeSelected,
        sodaFlavourSelected,
        getTotalPrice,
        handleTopping,
        handleExtraCost,
        handleSodaFlavour: setSodaFlavourSelected,
    };
};

export default useAdditionals;

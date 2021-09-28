/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from 'react';
import { CurrentAdditionalProps, SizeProps } from 'types';

type ShoppingProps = {
    toppingsAdded: Array<string> | [];
    sizeSelected: SizeProps | undefined;
    sodaFlavourSelected: string | undefined;
    getTotalPrice: () => string;
    handleTopping: (topping: string) => void;
    handleExtraCost: ({ extraCost }: SizeProps) => void;
    handleSodaFlavour: Dispatch<SetStateAction<string>> | any;
};

const useAdditionals = ({
    price, toppings, size, sodaFlavour,
}: CurrentAdditionalProps): ShoppingProps => {
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

    const handleExtraCost = (additional: SizeProps) => {
        if (sizeSelected?.name !== additional.name) {
            setSizeSelected(additional);
        }
    };

    const getTotalPrice = () => (parseFloat(price) + parseFloat(sizeSelected?.extraCost || '0.00')).toFixed(2);

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

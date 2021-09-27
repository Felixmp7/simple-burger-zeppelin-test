import { Dispatch, SetStateAction, useState } from 'react';
import { CurrentAdditionalProps, SizeProps } from 'types';

type ShoppingProps = {
    totalProductPrice: string;
    toppingsAdded: Array<string>;
    sizeSelected: SizeProps;
    sodaFlavourSelected: string;
    handleTopping: (topping: string) => void;
    handleExtraCost: ({ extraCost }: SizeProps) => void;
    handleSodaFlavour: Dispatch<SetStateAction<string>>;
};

const useAdditionals = ({
    defaultPrice, toppings, size, sodaFlavour,
}: CurrentAdditionalProps): ShoppingProps => {
    const [totalProductPrice, setTotalProductPrice] = useState<string>(defaultPrice || '0.00');
    const [toppingsAdded, setToppingsAdded] = useState<Array<string>>(toppings || []);
    const [sizeSelected, setSizeSelected] = useState<SizeProps>(size || { name: 'Small', extraCost: '0.00' });
    const [sodaFlavourSelected, setSodaFlavourSelected] = useState<string>(sodaFlavour || 'Cola');

    const handleTopping = (topping: string): void => {
        let newToppingsList;
        const alreadySelected = toppingsAdded.some((item) => item === topping);

        if (alreadySelected) {
            newToppingsList = toppingsAdded.filter((item) => item !== topping);
        } else {
            newToppingsList = [...toppingsAdded, topping];
        }
        setToppingsAdded([...newToppingsList]);
    };

    const handleExtraCost = (additional: SizeProps) => {
        let result: string;
        const { extraCost } = additional;
        if (extraCost) {
            const extraCostNumber = parseFloat(extraCost);
            const totalPriceNumber = parseFloat(totalProductPrice);
            result = (totalPriceNumber + extraCostNumber).toFixed(2);
        } else {
            result = defaultPrice;
        }
        setTotalProductPrice(result);
        setSizeSelected(additional);
    };

    return {
        totalProductPrice,
        toppingsAdded,
        sizeSelected,
        sodaFlavourSelected,
        handleTopping,
        handleExtraCost,
        handleSodaFlavour: setSodaFlavourSelected,
    };
};

export default useAdditionals;

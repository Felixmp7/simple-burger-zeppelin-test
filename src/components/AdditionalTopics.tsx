import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { SizeProps } from 'types';
import { breakPoints } from '../constants';
import Sizes from './widgets/Sizes';
import SodaFlavours from './widgets/SodaFlavours';
import Toppings from './widgets/Toppings';

const Container = styled.div`

    .container-sizes-soda-flavours {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 20px;

        .sizes { grid-area: 1 / 1 / 2 / 2; }
        .soda-flavours { grid-area: 1 / 2 / 2 / 4; }
    }

    @media screen and (max-width: ${breakPoints.mobileXl}) {
        display: flex;
        .container-sizes-soda-flavours {
            display: block;
            width: 50%;
            padding-right: 20px;
        }
        .toppings {
            width: 50%;
            padding-left: 20px;
        }
    }
`;

type Props = {
    productType: string;
    size: SizeProps;
    toppings: string[];
    sodaFlavour: string;
    handleExtraCost: (additional: SizeProps) => void;
    setToppings: (topping: string) => void;
    setSodaFlavour: Dispatch<SetStateAction<string>>;
};

const AdditionalTopics = ({
    productType,
    size,
    toppings,
    sodaFlavour,
    handleExtraCost,
    setToppings,
    setSodaFlavour,
}: Props): JSX.Element => {
    if (productType === 'burger') {
        return <Toppings toppings={toppings} setToppings={setToppings} />;
    }

    if (productType === 'fries') {
        return <Sizes size={size} handleExtraCost={handleExtraCost} />;
    }

    if (productType === 'sodas') {
        return <SodaFlavours sodaFlavour={sodaFlavour} setSodaFlavour={setSodaFlavour} />;
    }

    return (
        <Container>
            <div className="container-sizes-soda-flavours">
                <div className="sizes">
                    <Sizes size={size} handleExtraCost={handleExtraCost} />
                </div>
                <div className="soda-flavours">
                    <SodaFlavours sodaFlavour={sodaFlavour} setSodaFlavour={setSodaFlavour} />
                </div>
            </div>
            <div className="toppings">
                <Toppings toppings={toppings} setToppings={setToppings} />
            </div>
        </Container>
    );
};

export default AdditionalTopics;

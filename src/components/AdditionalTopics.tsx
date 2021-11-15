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

interface IProps {
    productSlug: string;
    size: SizeProps | undefined;
    toppings: string[] | undefined;
    sodaFlavour: string | undefined;
    handleExtraCost: (params: any) => void;
    setToppings: (params: any) => void;
    setSodaFlavour: (params: any) => void;
}

const AdditionalTopics = ({
    productSlug,
    size,
    toppings,
    sodaFlavour,
    handleExtraCost,
    setToppings,
    setSodaFlavour,
}: IProps): JSX.Element => {
    if (productSlug === 'burger') {
        return <Toppings toppings={toppings} setToppings={setToppings} />;
    }

    if (productSlug === 'fries') {
        return <Sizes size={size} handleExtraCost={handleExtraCost} />;
    }

    if (productSlug === 'soda') {
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

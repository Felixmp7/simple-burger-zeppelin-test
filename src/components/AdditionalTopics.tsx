import styled from 'styled-components';
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
    handleTotalPrice: (additional: string) => void;
    productType: string;
};

const AdditionalTopics = ({ handleTotalPrice, productType }: Props): JSX.Element => {
    if (productType === 'burger') {
        return <Toppings />;
    }

    if (productType === 'fries') {
        return <Sizes handleTotalPrice={handleTotalPrice} />;
    }

    if (productType === 'sodas') {
        return <SodaFlavours />;
    }

    return (
        <Container>
            <div className="container-sizes-soda-flavours">
                <div className="sizes">
                    <Sizes handleTotalPrice={handleTotalPrice} />
                </div>
                <div className="soda-flavours">
                    <SodaFlavours />
                </div>
            </div>
            <div className="toppings">
                <Toppings />
            </div>
        </Container>
    );
};

export default AdditionalTopics;

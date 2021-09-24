import Price from 'components/widgets/Price';
import CarButton from 'components/CartButton';
import styled from 'styled-components';

const ContainerActions = styled.div`
    display: flex;
    justify-content: space-between;

    .bubble {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        width: 108px;
        height: 32px;
        background: #EFF0F2;
        border-radius: 4px;
}`;

type Props = {
    price: string | number;
    handleClick: () => void;
}

const ProductActions = ({ price, handleClick }: Props): JSX.Element => (
    <ContainerActions>
        <div className="bubble">
            <Price price={price} />
        </div>
        <CarButton handleClick={handleClick} />
    </ContainerActions>
);

export default ProductActions;

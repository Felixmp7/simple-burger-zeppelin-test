import styled from 'styled-components';
import shopping from 'assets/icons/shop-icon.svg';
import Price from 'components/Price';

const Container = styled.div`
    width: 368.66px;
    height: 72px;
    position: absolute;
    top: 0;
    right: 120px;
    padding: 16px;
    background-color: white;
    border-radius: 0px 0px 10px 10px;
`;

const ShoppingBar = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    background-color: #F01C4F;
    display: flex;
    border-radius: 8px;
    color: white;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
`;

const ShoppingIcon = styled.img`
    width: 11.47px;
    height: 13.28px;
`;

const Text = styled.span`
    font-size: 12px;
`;

type Props = {
    text: string;
    price: number;
}

const ShoppingCart = ({ text, price }: Props): JSX.Element => (
    <Container>
        <ShoppingBar>
            <ShoppingIcon src={shopping} alt="Shopping Icon" />
            <Text>{text}</Text>
            <Price price={price} />
        </ShoppingBar>
    </Container>
);

export default ShoppingCart;

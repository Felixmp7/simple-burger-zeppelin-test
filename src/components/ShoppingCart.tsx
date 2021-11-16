import { Link } from 'react-router-dom';
import useShoppingCart from 'hooks/useShoppingCart';
import styled from 'styled-components';
import carIcon from 'assets/icons/car-icon.svg';
import ProductAdded from './ProductAdded';
import CloseModalButton from './widgets/CloseModalButton';
import { breakPoints, colors } from '../constants';
import Price from './widgets/Price';

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 576px;
    margin: 0 auto;
    padding: 80px 0;

    .close-button {
        position: absolute;
        top: 40px;
        right: -40px;
    };

    .container-products {
        height: 90%;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        };

        .empty {
            font-size: 3rem;
            text-align: center;
            color: white;
        };
    };

    .finish-order {
        padding: 16px;
        background-color: white;
        border-radius: 8px;
    };

    @media screen and (max-width: ${breakPoints.tablet}) {
        width: 80vw;
    };

    @media screen and (max-width: ${breakPoints.mobileSm}) {
        width: 288px;
        .close-button {
            right: -10px;
            top: 20px;
        };
    };
`;

const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    background-color: ${colors.green};
    display: flex;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 500;

    img {
        width: 11.47px;
        height: 13.28px;
    }
`;

interface IProps {
    closeModal: () => void;
}

const ShoppingCart = ({ closeModal }: IProps): JSX.Element => {
    const { shopList, getTotalPrice } = useShoppingCart();

    return (
        <Container>
            <div className="close-button"><CloseModalButton onClose={closeModal} /></div>
            <div className="container-products">
                {shopList.length
                    ? shopList.map((product) => (
                        <ProductAdded key={product.productOrderId} {...product} />
                    )) : <div className="empty">No products</div>}
            </div>
            {shopList.length && (
                <div className="finish-order">
                    <StyledLink to="/order-finished">
                        <img src={carIcon} alt="Shopping Icon" />
                        <span>Finalize order</span>
                        <Price price={getTotalPrice()} />
                    </StyledLink>
                </div>
            )}
        </Container>
    );
};

export default ShoppingCart;

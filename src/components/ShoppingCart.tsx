import { useHistory } from 'react-router-dom';
import useShoppingCart from 'hooks/useShoppingCart';
import styled from 'styled-components';
import carIcon from 'assets/icons/car-icon.svg';
import ProductAdded from './widgets/ProductAdded';
import CloseModalButton from './widgets/CloseModalButton';
import { breakPoints } from '../constants';
import ShoppingBar from './widgets/ShoppingBar';

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

type Props = {
    closeModal: () => void;
};

const ShoppingCart = ({ closeModal }: Props): JSX.Element => {
    const { shopList, getTotalPrice } = useShoppingCart();
    const history = useHistory();

    return (
        <Container>
            <div className="close-button"><CloseModalButton onClose={closeModal} /></div>
            <div className="container-products">
                {shopList.length
                    ? shopList.map((product) => (
                        <ProductAdded key={product.productOrderId} {...product} />
                    )) : <div className="empty">No products ordered</div>}
            </div>
            <div className="finish-order">
                <ShoppingBar
                    text="Finalize order"
                    price={getTotalPrice()}
                    icon={carIcon}
                    onClick={() => history.push('/order-finished')}
                />
            </div>
        </Container>
    );
};

export default ShoppingCart;

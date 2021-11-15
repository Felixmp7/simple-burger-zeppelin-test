import { useState } from 'react';
import styled from 'styled-components';
import banner from 'assets/backgrounds/banner.png';
import logo from 'assets/vectors/complete-logo.svg';
import useShoppingCart from 'hooks/useShoppingCart';
import useDisableBodyScroll from 'hooks/useDisableBodyScroll';
import ShoppingBar from './widgets/ShoppingBar';
import { breakPoints, colors } from '../constants';
import ScreenModal from './widgets/ScreenModal';
import ShoppingCart from './ShoppingCart';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 383.7px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0) 73.31%), url(${banner});
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 0px 0px 40px 40px;

    .container-total-price {
        width: 368.66px;
        height: 72px;
        position: absolute;
        top: 0;
        right: 120px;
        padding: 16px;
        background-color: white;
        border-radius: 0px 0px 10px 10px;
    }

    @media screen and (max-width: ${breakPoints.laptopLg}) {
        height: 320px;
        background-size: cover;
        background-position: center;
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
        height: 264px;

        .container-total-price {
            width: 216.48px;
            right: 24px;
        }
    }

    @media screen and (max-width: ${breakPoints.mobileMd}) {
        height: 272px;

        .container-total-price {
            width: 176px;
            height: 54px;
            right: 0;
            padding: 8px;
        }
    }

`;

const Logo = styled.img`
    position: absolute;
    top: 12.74px;
    left: 104px;
    width: auto;
    height: auto;

    @media screen and (max-width: ${breakPoints.tablet}) {
        left: 29.07px;
        top: 4px;
    }

    @media screen and (max-width: ${breakPoints.mobileMd}) {
        width: 99.54px;
        height: 53.88px;
        left: 20px;
    }
`;

const Banner = (): JSX.Element => {
    const [isShowOrder, setIsShowOrder] = useState(false);
    useDisableBodyScroll(isShowOrder);
    const { getTotalPrice } = useShoppingCart();
    const totalPrice = getTotalPrice();

    return (
        <Container>
            <Logo src={logo} alt="Burger Logo" />
            <div className="container-total-price">
                <ShoppingBar
                    text="View order"
                    backgroundColor={colors.pink}
                    price={totalPrice}
                    onClick={() => setIsShowOrder(true)}
                />
            </div>
            {isShowOrder && (
                <ScreenModal>
                    <ShoppingCart closeModal={() => setIsShowOrder(false)} />
                </ScreenModal>
            )}
        </Container>
    );
};

export default Banner;

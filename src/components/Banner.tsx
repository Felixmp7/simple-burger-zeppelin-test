import styled from 'styled-components';
import banner from 'assets/banner.png';
import logo from 'assets/vectors/complete-logo.svg';
import useShopList from 'hooks/useShopList';
import ShoppingBar from './widgets/ShoppingBar';
import { colors } from '../constants';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 383.7px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0) 73.31%), url(${banner});
    background-size: 100%;
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
`;

const Logo = styled.img`
    position: absolute;
    top: 12.74px;
    left: 104px;
`;

const Banner = (): JSX.Element => {
    const { shopCount } = useShopList();

    return (
        <Container>
            <Logo src={logo} alt="Burger Logo" />
            <div className="container-total-price">
                <ShoppingBar text="View order" backgroundColor={colors.pink} price={shopCount} />
            </div>
        </Container>
    );
};

export default Banner;

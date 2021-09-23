import styled from 'styled-components';
import banner from 'assets/banner.png';
import logo from 'assets/vectors/complete-logo.svg';
import ShoppingCart from './widgets/ShoppingCart';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 383.7px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0) 73.31%), url(${banner});
    border-radius: 0px 0px 40px 40px;
`;

const Logo = styled.img`
    position: absolute;
    top: 12.74px;
    left: 104px;
`;

const Banner = (): JSX.Element => (
    <Container>
        <Logo src={logo} alt="Burger Logo" />
        <ShoppingCart text="View order" price={11.99} />
    </Container>
);

export default Banner;

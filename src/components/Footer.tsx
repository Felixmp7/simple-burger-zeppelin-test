import logo from 'assets/vectors/complete-logo.svg';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    height: 153px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    margin-top: 100px;
`;

const Footer = (): JSX.Element => (
    <StyledFooter>
        <img src={logo} alt="Simple Burger Logo" />
    </StyledFooter>
);

export default Footer;

import styled from 'styled-components';
import icon from 'assets/icons/car-icon.svg';

const Container = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 8px 16px;
    width: 108px;
    height: 32px;
    border-radius: 4px;
    background-color: #5AD88C;

    > p {
        margin-left: 10px;
    }
`;

const BuyButton = (): JSX.Element => (
    <Container>
        <img src={icon} alt="Add icon" />
        <p>Select</p>
    </Container>
);

export default BuyButton;

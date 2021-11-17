import styled from 'styled-components';
import icon from 'assets/icons/time.png';
import useShoppingCart from 'hooks/useShoppingCart';

const Container = styled.div<{ isReady: boolean }>`
    -moz-box-shadow: 0px 3px 6px 0px #919191;
    -webkit-box-shadow: 0px 3px 6px 0px #919191;
    box-shadow: 0px 3px 6px 0px #919191;
    background-color: ${({ isReady }) => (isReady ? '#8df5b5' : '#fdccda')};
    display: flex;
    align-items: center;
    padding: .7rem;
    font-size: 14px;
    border-radius: .2rem .5rem .8rem .8rem;

    img {
        margin-right: .5rem;
    }
`;

const DeliveryTime = (): JSX.Element => {
    const { deliveryTime } = useShoppingCart();
    const isReady = deliveryTime === 0;
    return (
        <Container isReady={isReady}>
            <img src={icon} width={20} height={20} alt="Add icon" />
            <span>
                {isReady ? 'Order ready!' : 'Time remaining:'}
                {!isReady && <b>{` ${deliveryTime} minutes`}</b>}
            </span>
        </Container>
    );
};

export default DeliveryTime;

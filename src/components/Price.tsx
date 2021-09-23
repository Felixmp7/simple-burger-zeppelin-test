import styled from 'styled-components';

const Container = styled.span`
    font-size: 12px;
`;

type Props = { price: number };

const Price = ({ price }: Props): JSX.Element => (
    <Container>
        <span>$</span>
        {price}
    </Container>
);

export default Price;

import styled from 'styled-components';

const Container = styled.span`
    font-size: 12px;

    &:before {
        content: '$';
        color: #ffffffaa;
    }
`;

type Props = { price: string | number };

const Price = ({ price }: Props): JSX.Element => (
    <Container>
        {price}
    </Container>
);

export default Price;

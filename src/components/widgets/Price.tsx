import styled from 'styled-components';

const Container = styled.span<{ dollarColor?: string }>`
    font-size: 12px;

    &:before {
        content: '$';
        color: ${({ dollarColor }) => dollarColor};
    }
`;

type Props = {
    price: string | number;
    dollarColor?: string;
};

const Price = ({ price, dollarColor }: Props): JSX.Element => (
    <Container dollarColor={dollarColor}>{price}</Container>
);

Price.defaultProps = {
    dollarColor: '#ffffffaa',
};

export default Price;

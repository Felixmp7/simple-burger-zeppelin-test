import styled from 'styled-components';

const DollarPrice = styled.span<{ dollarColor?: string }>`
    font-size: 12px;

    &:before {
        content: '$';
        color: ${({ dollarColor }) => dollarColor};
    }
`;

type Props = {
    price: string;
    dollarColor?: string;
};

const Price = ({ price, dollarColor }: Props): JSX.Element => (
    <DollarPrice dollarColor={dollarColor}>{price}</DollarPrice>
);

Price.defaultProps = {
    dollarColor: '#ffffffaa',
};

export default Price;

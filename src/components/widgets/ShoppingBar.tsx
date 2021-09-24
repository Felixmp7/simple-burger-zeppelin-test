import styled from 'styled-components';
import shopping from 'assets/icons/shop-icon.svg';
import Price from 'components/Price';
import { colors } from '../../constants';
import Button from './Button';

type styleProps = {
    backgroundColor?: string;
    onClick?: () => void;
};

const Bar = styled(Button)<styleProps>`
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: flex;
    border-radius: 8px;
    color: white;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 500;

    img {
        width: 11.47px;
        height: 13.28px;
    }
`;

type Props = {
    text: string;
    icon?: string;
    backgroundColor?: string;
    price: string;
    onClick?: () => void;
}

const ShoppingBar = ({
    text, icon, backgroundColor, price, onClick,
}: Props): JSX.Element => (
    <Bar backgroundColor={backgroundColor} onClick={onClick}>
        <>
            <img src={icon} alt="Shopping Icon" />
            <span>{text}</span>
            <Price price={price} />
        </>
    </Bar>
);

ShoppingBar.defaultProps = {
    icon: shopping,
    backgroundColor: colors.green,
    onClick: null,
};

export default ShoppingBar;

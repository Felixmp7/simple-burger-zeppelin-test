import styled from 'styled-components';
import icon from 'assets/icons/car-icon.svg';
import { breakPoints } from '../constants';

const Button = styled.button<{ remove?: boolean }>`
    font-size: 12px;
    border: none;
    line-height: 12px;
    cursor: pointer;
    display: flex;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 8px 16px;
    width: 108px;
    height: 32px;
    border-radius: 4px;
    background-color: ${({ remove }) => (remove ? '#F01C4F' : '#5AD88C')};
    transition: 1s ease all;
    &:hover {
        background-color: ${({ remove }) => (remove ? '#ca1841' : '#4eb878')};
    }

    > p {
        margin-left: 10px;
    }

    @media screen and (max-width: ${breakPoints.laptopXl}) {
        width: 84px;
    }

    @media screen and (max-width: ${breakPoints.mobileMd}) {
        width: 100%;
        margin-top: 7px;

        > img {
            width: 13px;
        }
    }
`;

type Props = {
    handleClick: () => void;
    remove?: boolean;
};

const CartButton = ({ remove, handleClick }: Props): JSX.Element => (
    <Button type="button" remove={remove} onClick={handleClick}>
        <img src={icon} alt="Add icon" />
        <p>{remove ? 'Remove' : 'Select'}</p>
    </Button>
);

CartButton.defaultProps = {
    remove: false,
};

export default CartButton;

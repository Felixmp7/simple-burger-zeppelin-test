import styled from 'styled-components';
import icon from 'assets/icons/car-icon.svg';
import { breakPoints } from '../../constants';

const Button = styled.button<{ remove?: boolean }>`
    font-size: 12px;
    border: none;
    line-height: 12px;
    cursor: pointer;
    display: inline-flex;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 8px 16px;
    width: 100%;
    height: 32px;
    border-radius: 4px;
    transition: 1s ease all;
    background-color: ${({ remove }) => (remove ? '#F01C4F' : '#5AD88C')};
    &:hover {
        background-color: ${({ remove }) => (remove ? '#ca1841' : '#4eb878')};
    }

    > p {
        margin: 0;
        margin-left: 10px;
    }

    @media screen and (max-width: ${breakPoints.mobileMd}) {
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

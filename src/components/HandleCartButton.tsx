import styled from 'styled-components';
import icon from 'assets/icons/car-icon.svg';
import useShopList from 'hooks/useShopList';

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
`;

type Props = {
    price: string | number;
    remove?: boolean;
};

const HandleCarButton = ({ remove, price }: Props): JSX.Element => {
    const { handleAddOrRemove } = useShopList();
    return (
        <Button remove={remove} onClick={() => handleAddOrRemove(remove, price)}>
            <img src={icon} alt="Add icon" />
            <p>{remove ? 'Remove' : 'Select'}</p>
        </Button>
    );
};

HandleCarButton.defaultProps = {
    remove: false,
};

export default HandleCarButton;

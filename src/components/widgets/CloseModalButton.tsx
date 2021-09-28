import close from 'assets/icons/close.svg';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    cursor: pointer;
    width: 41px;
    height: 42px;
    background: none;
    padding: 0;
    padding-top: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

type Props = {
    onClose: () => void;
};

const CloseModalButton = ({ onClose }: Props): JSX.Element => (
    <ButtonStyled onClick={onClose} type="button">
        <img src={close} alt="Close Icon" />
    </ButtonStyled>
);

export default CloseModalButton;

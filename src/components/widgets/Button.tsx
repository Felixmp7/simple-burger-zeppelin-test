import { ReactChild } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    background: none;
    padding: 0px;
    cursor: pointer;
`;

type Props = {
    children: ReactChild;
    rest?: unknown;
    onClick?: (params?: any) => void | null;
}

const Button = ({ children, onClick, ...rest }: Props) : JSX.Element => (
    <StyledButton {...rest} onClick={onClick} type="button">
        {children}
    </StyledButton>
);

Button.defaultProps = {
    rest: {},
    onClick: null,
};

export default Button;

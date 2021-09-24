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
}

const Button = ({ children, ...rest }: Props) : JSX.Element => (
    <StyledButton {...rest} type="button">
        {children}
    </StyledButton>
);

Button.defaultProps = {
    rest: {},
};

export default Button;

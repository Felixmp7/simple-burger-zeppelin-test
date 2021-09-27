import { useState } from 'react';
import circleChecked from 'assets/icons/circle-checked.svg';
import circle from 'assets/icons/circle.svg';
import styled from 'styled-components';
import { breakPoints, sodaFlavours } from '../../constants';
import Button from './Button';
import CheckBox from './CheckBox';

const Title = styled.h4`
    font-style: normal;
    margin-top: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding-bottom: 8px;
    margin-bottom: 18.5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));

     @media screen and (max-width: ${breakPoints.mobileXl}) {
        display: block;
    }
`;

const StyledButton = styled(Button) <{ onClick?: (topping: string) => void }>`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const SodaFlavours = (): JSX.Element => {
    const [optionSelected, setOptionSelected] = useState<string>('Cola');

    return (
        <>
            <Title>Soda Flavours</Title>
            <Container>
                {sodaFlavours.map(({ name }) => {
                    const isChecked = optionSelected === name;
                    const icon = isChecked ? circleChecked : circle;

                    return (
                        <StyledButton key={name} onClick={() => setOptionSelected(name)}>
                            <CheckBox icon={icon} label={name} />
                        </StyledButton>
                    );
                })}
            </Container>
        </>
    );
};

export default SodaFlavours;

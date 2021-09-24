import { useState } from 'react';
import squareChecked from 'assets/icons/square-checked.svg';
import square from 'assets/icons/square.svg';
import styled from 'styled-components';
import { breakPoints, toppings } from '../../constants';
import Button from './Button';
import CheckBox from './CheckBox';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media screen and (max-width: ${breakPoints.tablet}) {
        display: block;
    }
`;
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

const StyledButton = styled(Button)<{ onClick?: (topping: string) => void }>`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Toppings = (): JSX.Element => {
    const [toppingsAdded, setToppingsAdded] = useState<Array<string>>([]);

    const handleTopping = (topping: string) : void => {
        let newToppingsList;
        const alreadySelected = toppingsAdded.some((item) => item === topping);

        if (alreadySelected) {
            newToppingsList = toppingsAdded.filter((item) => item !== topping);
        } else {
            newToppingsList = [...toppingsAdded, topping];
        }
        setToppingsAdded([...newToppingsList]);
    };

    return (
        <>
            <Title>Toppings</Title>
            <Container>
                {toppings.map(({ name }) => {
                    const isChecked = toppingsAdded.some((item) => item === name);
                    const icon = isChecked ? squareChecked : square;

                    return (
                        <StyledButton key={name} onClick={() => handleTopping(name)}>
                            <CheckBox icon={icon} label={name} />
                        </StyledButton>
                    );
                })}
            </Container>
        </>
    );
};

export default Toppings;

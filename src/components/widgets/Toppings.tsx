import { useState } from 'react';
import squareChecked from 'assets/icons/square-checked.svg';
import square from 'assets/icons/square.svg';
import styled from 'styled-components';
import { toppings } from '../../constants';
import Button from './Button';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
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

    > span {
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        margin-left: 8px;
        padding: 0;
    }
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
                            <>
                                <img src={icon} alt="Checkbox icon" />
                                <span>{name}</span>
                            </>
                        </StyledButton>
                    );
                })}
            </Container>
        </>
    );
};

export default Toppings;

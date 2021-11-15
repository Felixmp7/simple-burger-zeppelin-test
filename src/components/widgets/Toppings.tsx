import squareChecked from 'assets/icons/square-checked.svg';
import square from 'assets/icons/square.svg';
import styled from 'styled-components';
import { breakPoints, toppingsList } from '../../constants';
import Button from './Button';
import CheckBox from './CheckBox';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media screen and (max-width: ${breakPoints.mobileXl}) {
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

    @media screen and (max-width: ${breakPoints.mobileXl}) {
       font-size: 13px;
    }
`;

const StyledButton = styled(Button)<{ onClick?: (topping: string) => void }>`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

interface IProps {
    toppings?: Array<string>;
    setToppings: (topping: string) => void;
}

const Toppings = ({ toppings, setToppings }: IProps): JSX.Element => (
    <>
        <Title>Toppings</Title>
        <Container>
            {toppingsList.map(({ name }) => {
                const isChecked = toppings?.some((item) => item === name);
                const icon = isChecked ? squareChecked : square;

                return (
                    <StyledButton key={name} onClick={() => setToppings(name)}>
                        <CheckBox icon={icon} label={name} />
                    </StyledButton>
                );
            })}
        </Container>
    </>
);

Toppings.defaultProps = {
    toppings: [],
};

export default Toppings;

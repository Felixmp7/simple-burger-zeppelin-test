import circleChecked from 'assets/icons/circle-checked.svg';
import circle from 'assets/icons/circle.svg';
import styled from 'styled-components';
import { SizeProps } from 'types';
import { sizesList } from '../../constants';
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

const StyledButton = styled(Button) <{ onClick?: (topping: string) => void }>`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;

    .with-bracket::after {
        content: ' (';
    }

    .extra-cost:before {
        content: '+$';
        color: #7a7a7a54;
        margin-right: 2px;
    }
`;

type Props = {
    size: SizeProps;
    handleExtraCost: (additional: SizeProps) => void;
};

const Sizes = ({ size, handleExtraCost }: Props): JSX.Element => (
    <>
        <Title>Sizes</Title>
        {sizesList.map(({ name, extraCost }) => {
            const isChecked = size.name === name;
            const icon = isChecked ? circleChecked : circle;
            const extraCostClass = extraCost ? 'with-bracket' : '';

            return (
                <StyledButton key={name} onClick={() => handleExtraCost({ name, extraCost })}>
                    <>
                        <CheckBox icon={icon} classes={extraCostClass} label={name} />
                        {extraCost !== '0.00' && (
                            <span className="extra-cost">{`${extraCost})`}</span>
                        )}
                    </>
                </StyledButton>
            );
        })}
    </>
);

export default Sizes;

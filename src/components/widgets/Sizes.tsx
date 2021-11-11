import circleChecked from 'assets/icons/circle-checked.svg';
import circle from 'assets/icons/circle.svg';
import styled from 'styled-components';
import { SizeProps } from 'types';
import { breakPoints, sizesList } from '../../constants';
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

    @media screen and (max-width: ${breakPoints.mobileXl}) {
       font-size: 13px;
    }
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

interface IProps {
    size?: SizeProps;
    handleExtraCost: (additional: SizeProps) => void;
}

const Sizes = ({ size, handleExtraCost }: IProps): JSX.Element => (
    <>
        <Title>Sizes</Title>
        {sizesList.map(({ name, extraCost }) => {
            const withExtraCost = extraCost !== '0.00';
            const isChecked = size?.name === name;
            const icon = isChecked ? circleChecked : circle;
            const extraCostClass = withExtraCost ? 'with-bracket' : '';

            return (
                <StyledButton key={name} onClick={() => handleExtraCost({ name, extraCost })}>
                    <>
                        <CheckBox icon={icon} classes={extraCostClass} label={name} />
                        {withExtraCost && (
                            <span className="extra-cost">{`${extraCost})`}</span>
                        )}
                    </>
                </StyledButton>
            );
        })}
    </>
);

Sizes.defaultProps = {
    size: {
        name: 'Small', extraCost: '0.00',
    },
};

export default Sizes;

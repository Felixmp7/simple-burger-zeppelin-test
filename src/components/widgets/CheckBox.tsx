import styled from 'styled-components';

type Props = {
    icon: string;
    classes?: string;
    label: string;
}

const Image = styled.img`
    margin-right: 8px;
`;
const Label = styled.span`
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    padding: 0;
`;

const CheckBox = ({ icon, classes, label }: Props) : JSX.Element => (
    <>
        <Image src={icon} alt="Checkbox icon" />
        <Label className={classes}>{label}</Label>
    </>
);

CheckBox.defaultProps = {
    classes: '',
};

export default CheckBox;

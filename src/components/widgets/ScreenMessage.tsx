import styled from 'styled-components';

const Loader = styled.div`
    font-family: 'Cocogoose Pro Block';
    color: '#4C3260';
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScreenMessage = ({ message } : { message: string }): JSX.Element => (
    <Loader>{message}</Loader>
);

export default ScreenMessage;

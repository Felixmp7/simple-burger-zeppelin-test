import styled from 'styled-components';
import { SpinnerCircular } from 'spinners-react';

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScreenLoader = (): JSX.Element => (
    <Loader>
        <SpinnerCircular />
    </Loader>
);

export default ScreenLoader;

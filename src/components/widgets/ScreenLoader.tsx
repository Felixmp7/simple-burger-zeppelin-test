import styled from 'styled-components';

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScreenLoader = (): JSX.Element => (
    <Loader>Loading...</Loader>
);

export default ScreenLoader;

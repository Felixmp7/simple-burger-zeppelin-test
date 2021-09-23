import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';
import App from 'App';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';

const Container = styled.div`
    width: 1440px;
    margin: auto;
`;

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Container>
                <App />
            </Container>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

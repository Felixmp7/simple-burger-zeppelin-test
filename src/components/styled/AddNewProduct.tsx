import styled from 'styled-components';
import { IProductStyle } from 'types';
import { breakPoints } from '../../constants';

export const Container = styled.div`
    width: 576px;
    margin: 80px auto;

    .details {
        position: relative;
        border-radius: 8px;
        margin-bottom: 20px;
        overflow: hidden;

        p {
            margin-top: 0;
            margin-bottom: 10px;
        }

        .name {
            font-size: 15px;
            font-weight: 400;
            line-height: 24px;
        }
        .description {
            font-size: 12px;
            line-height: 14px;
            color: #6C707B;
        }
        .close-button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .container-additional-topics {
        border-radius: 8px;
        background: #FFFFFF;
        padding: 16px;

    }

    .container-add-to-order {
        height: 72px;
        padding: 16px;
        background-color: white;
        border-radius: 10px;
        margin-top: 20px;

    }

    @media screen and (max-width: ${breakPoints.tablet}) {
        width: 80vw;
    }

    @media screen and (max-width: ${breakPoints.mobileSm}) {
        width: 288px;
    }
`;

export const Image = styled.div<IProductStyle>`
    width: 100%;
    height: 252px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position-x: center;
`;

import styled from 'styled-components';
import { IProductStyle } from 'types';
import { breakPoints } from '../../constants';

export const Container = styled.div`
    position: relative;
    background: #FFFFFF;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 10px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 25px rgba(0, 0, 0, 0.05), 0px 3px 6px rgba(0, 0, 0, 0.04);

    .header-product {
        position: relative;
        width: 100%;
        height: 112.22px;
        display: flex;
        .header-content {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 16px;

            p {
                margin-top: 0;
            }

            .container-name-description {
                padding-right: 20px;
                .name {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                .description {
                    font-size: 12px;
                    color: #6C707B;
                }
            }

            .container-actions {
                display: flex;

                .bubble {
                    display: inline-flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 8px 16px;
                    height: 32px;
                    background: #EFF0F2;
                    border-radius: 4px;
                    margin-right: 10px;
                }
            }
        }
    }

    .additional-topics {
        padding: 16px;
    }


    @media screen and (max-width: ${breakPoints.tabletSm}) {
        .header-product {
            .header-content {
                .container-name-description {
                    .name {
                        font-size: 14px;
                    }
                    .description {
                        font-size: 11.5px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: ${breakPoints.mobileXl}) {
        .header-product {
            height: auto;
            .header-content {
                flex-direction: column;
            }
        }
    }

`;

export const Image = styled.div<IProductStyle>`
    width: 128px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
`;

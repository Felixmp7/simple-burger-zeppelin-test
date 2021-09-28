import { FC } from 'react';
import styled from 'styled-components';
import { IProduct, IProductStyle } from 'types';
import AdditionalTopics from 'components/AdditionalTopics';
import useOrderConfirmation from 'hooks/useOrderConfirmation';
import { breakPoints } from '../../constants';
import Price from './Price';
import CartButton from './CartButton';

const Container = styled.div`
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

const Image = styled.div<IProductStyle>`
    width: 128px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
`;

const ProductAdded: FC<IProduct> = (props) => {
    const {
        totalProductPrice,
        toppingsAdded,
        sizeSelected,
        sodaFlavourSelected,
        removeOfOrder,
        updateSize,
        updateSoda,
        updateToppingsAdded,
    } = useOrderConfirmation(props);

    const {
        image, name, description, productSlug,
    } = props;

    return (
        <Container>
            <div className="header-product">
                <Image image={image} />
                <div className="header-content">
                    <div className="container-name-description">
                        <p className="name">{name}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="container-actions">
                        <div className="bubble"><Price price={totalProductPrice} /></div>
                        <div className="container-cart-button">
                            <CartButton remove handleClick={removeOfOrder} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="additional-topics">
                <AdditionalTopics
                    productSlug={productSlug}
                    handleExtraCost={updateSize}
                    size={sizeSelected}
                    setToppings={updateToppingsAdded}
                    toppings={toppingsAdded}
                    setSodaFlavour={updateSoda}
                    sodaFlavour={sodaFlavourSelected}
                />
            </div>
        </Container>
    );
};

export default ProductAdded;

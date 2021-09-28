import { FC, useState } from 'react';
import styled from 'styled-components';
import { IProduct, IProductStyle } from 'types';
import useDisableBodyScroll from 'hooks/useDisableBodyScroll';
import AddNewProduct from '../AddNewProduct';
import { breakPoints } from '../../constants';
import ScreenModal from './ScreenModal';
import Price from './Price';
import CartButton from './CartButton';

const Container = styled.div`
    position: relative;
    width: 264px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 25px rgba(0, 0, 0, 0.05), 0px 3px 6px rgba(0, 0, 0, 0.04);

    .card {
        background: #FFFFFF;
        padding: 16px;

        > p {
            margin-top: 0;
            margin-bottom: 10px;
        }
    }

    .name {
        font-size: 15px;
        font-weight: 400;
    }
    .description {
        font-size: 12px;
        color: #6C707B;
    }

    .container-actions {
        display: flex;
        justify-content: space-between;

        .bubble {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            width: 108px;
            height: 32px;
            background: #EFF0F2;
            border-radius: 4px;
        }
        .container-cart-button {
            width: 108px;
        }
    }

    @media screen and (max-width: ${breakPoints.laptopMd}) {
        width: 216px;
        .container-actions {
            .bubble, .container-cart-button {
                width: 84px;
            }
        }
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
        .description {
            display: none;
        }

        .container-actions {
            margin-top: 30px;
        }
    }

    @media screen and (max-width: ${breakPoints.mobileMd}) {
        display: flex;
        width: 288px;

        .card {
            width: 160px;
        }
        .name {
            font-size: 13px;
        }

        .container-actions {
            flex-direction: column;

            .bubble, .container-cart-button {
                width: 100%;
            }
            .bubble {
                margin-bottom: 7px;
            }
        }
    }
`;

const Image = styled.div<IProductStyle>`
    width: 100%;
    height: 128px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;

    @media screen and (max-width: ${breakPoints.mobileMd}) {
        width: 128px;
        height: 100%;
        background-position: center;
    }
`;

const Product: FC<IProduct> = (props) => {
    const [addNewProduct, setAddNewProduct] = useState(false);
    useDisableBodyScroll(addNewProduct);
    const {
        image, name, description, price,
    } = props;

    return (
        <Container>
            {addNewProduct && (
                <ScreenModal>
                    <AddNewProduct
                        {...props}
                        closeModal={() => setAddNewProduct(false)}
                    />
                </ScreenModal>
            )}
            <Image image={image} />
            <div className="card">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <div className="container-actions">
                    <div className="bubble"><Price dollarColor="#00000055" price={price} /></div>
                    <div className="container-cart-button">
                        <CartButton
                            handleClick={() => setAddNewProduct(true)}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Product;

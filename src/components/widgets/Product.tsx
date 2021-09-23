import { FC } from 'react';
import Price from 'components/Price';
import styled from 'styled-components';
import { IProduct } from 'types';
import AddToCartButton from 'components/AddToCartButton';

interface IStyle { image?: string; }

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
    }

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
`;

const Image = styled.div<IStyle>`
    width: 100%;
    height: 128px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
`;

const Product: FC<IProduct> = ({
    image, name, description, price,
}) => (
    <Container>
        <Image image={image} />
        <div className="card">
            <p className="name">{name}</p>
            <p className="description">{description}</p>
            <div className="container-actions">
                <div className="bubble">
                    <Price price={price} />
                </div>
                <AddToCartButton />
            </div>
        </div>
    </Container>
);

export default Product;

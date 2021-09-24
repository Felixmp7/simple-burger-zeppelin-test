import { FC, useState } from 'react';
import styled from 'styled-components';
import { IProduct, IProductStyle } from 'types';
import useDisableBodyScroll from 'hooks/useDisableBodyScroll';
import ProductModal from './widgets/ProductModal';
import ProductActions from './widgets/ProductActions';
import { breakPoints } from '../constants';

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

    @media screen and (max-width: ${breakPoints.laptopMd}) {
        width: 216px;
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
        .description {
            display: none;
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
    const [isConfirmProduct, setIsConfirmProductOpen] = useState(false);
    useDisableBodyScroll(isConfirmProduct);
    const {
        image, name, description, price,
    } = props;

    return (
        <Container>
            {isConfirmProduct && (
                <ProductModal {...props} closeModal={() => setIsConfirmProductOpen(false)} />
            )}
            <Image image={image} />
            <div className="card">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <ProductActions handleClick={() => setIsConfirmProductOpen(true)} price={price} />
            </div>
        </Container>
    );
};

export default Product;

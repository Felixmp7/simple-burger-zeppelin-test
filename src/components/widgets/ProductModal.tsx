import { FC, useState } from 'react';
import styled from 'styled-components';
import { IProduct, IProductStyle } from 'types';
import close from 'assets/icons/close.svg';
import carIcon from 'assets/icons/car-icon.svg';
import useShopList from 'hooks/useShopList';
import AdditionalTopics from '../AdditionalTopics';
import ShoppingBar from './ShoppingBar';
import { breakPoints } from '../../constants';

const Modal = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, #000000 100%);
    backdrop-filter: blur(20px);
    overflow-y: auto;

    .container-detail-layout {
        width: 600px;
        margin: 80px auto;
    }

    .detail {
        position: relative;
        border-radius: 8px;
        margin-bottom: 20px;
        overflow: hidden;
    }

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
        cursor: pointer;
        width: 41px;
        height: 42px;
        background: none;
        top: 0;
        right: 0;
        padding: 0;
        padding-top: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container-additional-topics {
        border-radius: 8px;
        background: #FFFFFF;
        padding: 16px;

        .grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-gap: 20px;

            .sizes {
                grid-area: 1 / 1 / 2 / 2;
            }
            .soda-flavours {
                grid-area: 1 / 2 / 2 / 4;
            }
        }

        @media screen and (max-width: ${breakPoints.tablet}) {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-gap: 40px;

            .grid {
                display: flex;
                flex-direction: column;
            }
        }
    }

    .container-add-to-order {
        height: 72px;
        padding: 16px;
        background-color: white;
        border-radius: 10px;
        margin-top: 20px;
    }
`;

const Image = styled.div<IProductStyle>`
    width: 100%;
    height: 252px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
`;

interface IProductModal extends IProduct {
    closeModal: () => void;
}

const ProductModal: FC<IProductModal> = ({
    productType, image, name, description, price, closeModal,
}) => {
    const [totalPrice, setTotalPrice] = useState<string>(price.toFixed(2));
    const { handleAddOrRemove } = useShopList();

    const handleTotalPrice = (additional: string): void => {
        let result: string;
        const additionalNumber = parseFloat(additional);
        const priceNumber = parseFloat(totalPrice);
        if (additionalNumber) {
            result = (priceNumber + additionalNumber).toFixed(2);
        } else {
            result = price.toFixed(2);
        }
        setTotalPrice(result);
    };

    const handleClick = () => {
        const isRemove = false;
        handleAddOrRemove(isRemove, totalPrice);
        closeModal();
    };

    return (
        <Modal>
            <div className="container-detail-layout">
                <div className="detail">
                    <Image image={image} />
                    <div className="container-card">
                        <p className="name">{name}</p>
                        <p className="description">{description}</p>
                    </div>
                    <button onClick={closeModal} className="close-button" type="button">
                        <img src={close} alt="Close Icon" />
                    </button>
                </div>
                <div className="container-additional-topics">
                    <AdditionalTopics
                        productType={productType}
                        handleTotalPrice={handleTotalPrice}
                    />
                </div>
                <div className="container-add-to-order">
                    <ShoppingBar
                        text="Add to my order"
                        price={totalPrice}
                        icon={carIcon}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default ProductModal;

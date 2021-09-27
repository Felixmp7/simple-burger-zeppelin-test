import styled from 'styled-components';
import { IProductStyle, IProductModalProps } from 'types';
import close from 'assets/icons/close.svg';
import carIcon from 'assets/icons/car-icon.svg';
import useAdditionals from 'hooks/useAdditionals';
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
        width: 576px;
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
    }

    .container-add-to-order {
        height: 72px;
        padding: 16px;
        background-color: white;
        border-radius: 10px;
        margin-top: 20px;
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
        .container-detail-layout {
            width: 90vw;
        }

        .grid {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (max-width: ${breakPoints.mobileSm}) {
        .container-detail-layout {
            width: 288px;
        }
    }
`;

const Image = styled.div<IProductStyle>`
    width: 100%;
    height: 252px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position-x: center;
`;

const ProductModal = (props: IProductModalProps) : JSX.Element => {
    const {
        closeModal, image, name, description, productType, price, additionals,
    } = props;

    const {
        totalProductPrice, toppingsAdded, sizeSelected, sodaFlavourSelected, handleTopping, handleExtraCost, handleSodaFlavour,
    } = useAdditionals({ ...additionals, defaultPrice: price });
    const { handleAddOrRemove } = useShopList();

    const addToCart = () => {
        const isRemove = false;
        const newProduct = {
            ...props,
            productOrderId: Math.random().toString(36).slice(2),
            price: totalProductPrice,
            additionals: {
                toppings: toppingsAdded,
                size: sizeSelected,
                sodaFlavour: sodaFlavourSelected,
            },
        };
        handleAddOrRemove(newProduct, isRemove);
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
                        handleExtraCost={handleExtraCost}
                        size={sizeSelected}
                        setToppings={handleTopping}
                        toppings={toppingsAdded}
                        setSodaFlavour={handleSodaFlavour}
                        sodaFlavour={sodaFlavourSelected}
                    />
                </div>
                <div className="container-add-to-order">
                    <ShoppingBar
                        text="Add to my order"
                        price={totalProductPrice}
                        icon={carIcon}
                        onClick={addToCart}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default ProductModal;

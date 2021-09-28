import styled from 'styled-components';
import { IProductStyle, IProductModalProps } from 'types';
import carIcon from 'assets/icons/car-icon.svg';
import useAdditionals from 'hooks/useAdditionals';
import useShopList from 'hooks/useShopList';
import AdditionalTopics from './AdditionalTopics';
import ShoppingBar from './widgets/ShoppingBar';
import CloseModalButton from './widgets/CloseModalButton';
import { breakPoints } from '../constants';

const Container = styled.div`
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

const Image = styled.div<IProductStyle>`
    width: 100%;
    height: 252px;
    overflow: hidden;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position-x: center;
`;

const ConfirmProduct = (props: IProductModalProps) : JSX.Element => {
    const {
        closeModal, image, name, description, productSlug, price, additionals, ...rest
    } = props;
    const { handleAddOrRemove } = useShopList();
    const {
        getTotalPrice, toppingsAdded, sizeSelected, sodaFlavourSelected, handleTopping, handleExtraCost, handleSodaFlavour,
    } = useAdditionals({ ...additionals, price });

    const addToCart = () => {
        const isRemove = false;
        const newProduct = {
            ...rest,
            image,
            name,
            description,
            productSlug,
            price,
            productOrderId: Math.random().toString(36).slice(2),
            additionals: {
                toppings: toppingsAdded.length ? toppingsAdded : undefined,
                size: sizeSelected || undefined,
                sodaFlavour: sodaFlavourSelected || undefined,
            },
        };
        handleAddOrRemove(newProduct, isRemove);
        closeModal();
    };

    return (
        <Container>
            <div className="details">
                <Image image={image} />
                <div className="container-card">
                    <p className="name">{name}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="close-button">
                    <CloseModalButton onClose={closeModal} />
                </div>
            </div>
            <div className="container-additional-topics">
                <AdditionalTopics
                    productSlug={productSlug}
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
                    price={getTotalPrice()}
                    icon={carIcon}
                    onClick={addToCart}
                />
            </div>
        </Container>
    );
};

export default ConfirmProduct;

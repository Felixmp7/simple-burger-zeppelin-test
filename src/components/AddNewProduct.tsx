import styled from 'styled-components';
import { IProductStyle, IProductModalProps } from 'types';
import carIcon from 'assets/icons/car-icon.svg';
import useOrderProduct from 'hooks/useOrderProduct';
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
        totalProductPrice,
        sizeSelected,
        toppingsAdded,
        handleSodaFlavour,
        sodaFlavourSelected,
        closeModal,
        handleExtraCost,
        handleTopping,
        addToCart,
    } = useOrderProduct(props);

    const {
        image, name, description, productSlug,
    } = props;

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
                    price={totalProductPrice}
                    icon={carIcon}
                    onClick={addToCart}
                />
            </div>
        </Container>
    );
};

export default ConfirmProduct;

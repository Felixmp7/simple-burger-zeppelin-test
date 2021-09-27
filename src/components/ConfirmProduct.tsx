import styled from 'styled-components';
import { IProductStyle, IProductModalProps } from 'types';
import close from 'assets/icons/close.svg';
import carIcon from 'assets/icons/car-icon.svg';
import useAdditionals from 'hooks/useAdditionals';
import useShopList from 'hooks/useShopList';
import AdditionalTopics from './AdditionalTopics';
import ShoppingBar from './widgets/ShoppingBar';

const Details = styled.div`
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
`;

const ContainerAdditionalTopics = styled.div`
    border-radius: 8px;
    background: #FFFFFF;
    padding: 16px;
`;

const ContainerAddToOrder = styled.div`
    height: 72px;
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
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
        closeModal, image, name, description, productSlug, price, additionals,
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
        <>
            <Details>
                <Image image={image} />
                <div className="container-card">
                    <p className="name">{name}</p>
                    <p className="description">{description}</p>
                </div>
                <button onClick={closeModal} className="close-button" type="button">
                    <img src={close} alt="Close Icon" />
                </button>
            </Details>
            <ContainerAdditionalTopics>
                <AdditionalTopics
                    productSlug={productSlug}
                    handleExtraCost={handleExtraCost}
                    size={sizeSelected}
                    setToppings={handleTopping}
                    toppings={toppingsAdded}
                    setSodaFlavour={handleSodaFlavour}
                    sodaFlavour={sodaFlavourSelected}
                />
            </ContainerAdditionalTopics>
            <ContainerAddToOrder>
                <ShoppingBar
                    text="Add to my order"
                    price={totalProductPrice}
                    icon={carIcon}
                    onClick={addToCart}
                />
            </ContainerAddToOrder>
        </>
    );
};

export default ConfirmProduct;

import { IProductModalProps } from 'types';
import carIcon from 'assets/icons/car-icon.svg';
import useOrderProduct from 'hooks/useOrderProduct';
import { Container, Image } from 'components/styled/AddNewProduct';
import AdditionalTopics from './AdditionalTopics';
import ShoppingBar from './widgets/ShoppingBar';
import CloseModalButton from './widgets/CloseModalButton';

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

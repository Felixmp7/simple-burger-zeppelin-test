import { IProduct } from 'types';
import carIcon from 'assets/icons/car-icon.svg';
import useAdditionals from 'hooks/useAdditionals';
import useAddProduct from 'hooks/useAddProduct';
import { Container, Image } from 'components/styled/AddNewProduct';
import AdditionalTopics from './AdditionalTopics';
import ShoppingBar from './widgets/ShoppingBar';
import CloseModalButton from './widgets/CloseModalButton';

interface IProductProps extends IProduct {
    closeModal: () => void;
}

const AddNewProduct = (props: IProductProps) : JSX.Element => {
    const {
        handleSodaFlavour,
        toppingsAdded,
        sizeSelected,
        sodaFlavourSelected,
        getTotalPrice,
        handleTopping,
        handleExtraCost,
    } = useAdditionals(props);

    const { addToCart } = useAddProduct({
        ...props, sodaFlavourSelected, sizeSelected, toppingsAdded,
    });

    const {
        image, name, description, productSlug, closeModal,
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
                    price={getTotalPrice()}
                    icon={carIcon}
                    onClick={addToCart}
                />
            </div>
        </Container>
    );
};

export default AddNewProduct;

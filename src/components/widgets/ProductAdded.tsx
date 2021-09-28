import { FC } from 'react';
import { IProduct } from 'types';
import AdditionalTopics from 'components/AdditionalTopics';
import useOrderConfirmation from 'hooks/useOrderConfirmation';
import { Container, Image } from 'components/styled/ProductAdded';
import Price from './Price';
import CartButton from './CartButton';

const ProductAdded: FC<IProduct> = (props) => {
    const {
        totalProductPrice,
        toppingsAdded,
        sizeSelected,
        sodaFlavourSelected,
        removeOfOrder,
        updateSize,
        updateSoda,
        updateToppingsAdded,
    } = useOrderConfirmation(props);

    const {
        image, name, description, productSlug,
    } = props;

    return (
        <Container>
            <div className="header-product">
                <Image image={image} />
                <div className="header-content">
                    <div className="container-name-description">
                        <p className="name">{name}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="container-actions">
                        <div className="bubble"><Price dollarColor="#00000055" price={totalProductPrice} /></div>
                        <div className="container-cart-button">
                            <CartButton remove handleClick={removeOfOrder} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="additional-topics">
                <AdditionalTopics
                    productSlug={productSlug}
                    handleExtraCost={updateSize}
                    size={sizeSelected}
                    setToppings={updateToppingsAdded}
                    toppings={toppingsAdded}
                    setSodaFlavour={updateSoda}
                    sodaFlavour={sodaFlavourSelected}
                />
            </div>
        </Container>
    );
};

export default ProductAdded;

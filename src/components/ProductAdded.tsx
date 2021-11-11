import { FC } from 'react';
import { IProduct } from 'types';
import AdditionalTopics from 'components/AdditionalTopics';
import useShoppingCart from 'hooks/useShoppingCart';
import { Container, Image } from 'components/styled/ProductAdded';
import Price from './widgets/Price';
import CartButton from './widgets/CartButton';

const ProductAdded: FC<IProduct> = (props) => {
    const {
        handleAddOrRemove,
        updateProductSize,
        updateSodaFlavour,
        updateToppings,
        getProductSubtotal,
    } = useShoppingCart();

    const {
        image,
        name,
        description,
        productSlug,
        productOrderId,
        additionals: { size, toppings, sodaFlavour },
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
                        <div className="bubble">
                            <Price
                                dollarColor="#00000055"
                                price={getProductSubtotal(productOrderId!)}
                            />
                        </div>
                        <div className="container-cart-button">
                            <CartButton remove handleClick={() => handleAddOrRemove(props)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="additional-topics">
                <AdditionalTopics
                    productSlug={productSlug}
                    handleExtraCost={(newSize) => updateProductSize({ productOrderId, newSize })}
                    size={size}
                    setToppings={(topping) => updateToppings({ productOrderId, topping })}
                    toppings={toppings}
                    setSodaFlavour={(newFlavour) => updateSodaFlavour({ productOrderId, newFlavour })}
                    sodaFlavour={sodaFlavour}
                />
            </div>
        </Container>
    );
};

ProductAdded.displayName = 'Product Added';

export default ProductAdded;

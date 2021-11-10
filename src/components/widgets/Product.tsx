import { FC, useState } from 'react';
import { IProduct } from 'types';
import useDisableBodyScroll from 'hooks/useDisableBodyScroll';
import { Container, Image } from 'components/styled/Product';
import AddNewProduct from '../AddNewProduct';
import ScreenModal from './ScreenModal';
import Price from './Price';
import CartButton from './CartButton';

const Product: FC<IProduct> = (props) => {
    const [isAddNew, setIsAddNew] = useState(false);
    useDisableBodyScroll(isAddNew);
    const {
        image, name, description, price,
    } = props;

    return (
        <Container>
            {isAddNew && (
                <ScreenModal>
                    <AddNewProduct closeModal={() => setIsAddNew(false)} {...props} />
                </ScreenModal>
            )}
            <Image image={image} />
            <div className="card">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <div className="container-actions">
                    <div className="bubble"><Price dollarColor="#00000055" price={price} /></div>
                    <div className="container-cart-button">
                        <CartButton handleClick={() => setIsAddNew(true)} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Product;

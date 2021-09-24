import Sizes from './widgets/Sizes';
import SodaFlavours from './widgets/SodaFlavours';
import Toppings from './widgets/Toppings';

type Props = {
    handleTotalPrice: (additional: string) => void;
    productType: string;
};

const ProductDetails = ({ handleTotalPrice, productType }: Props): JSX.Element => {
    if (productType === 'burger') {
        return <Toppings />;
    }

    if (productType === 'fries') {
        return <Sizes handleTotalPrice={handleTotalPrice} />;
    }

    if (productType === 'sodas') {
        return <SodaFlavours />;
    }

    return (
        <>
            <div className="grid">
                <div className="sizes">
                    <Sizes handleTotalPrice={handleTotalPrice} />
                </div>
                <div className="soda-flavours">
                    <SodaFlavours />
                </div>
            </div>
            <div className="toppings">
                <Toppings />
            </div>
        </>
    );
};

export default ProductDetails;

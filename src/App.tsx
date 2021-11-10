import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Products from 'components/Products';
import SectionBg from 'components/SectionBg';
import ScreenLoader from 'components/widgets/ScreenLoader';
import useProducts from 'hooks/useProducts';

const App = (): JSX.Element => {
    const { isLoading, products } = useProducts();

    if (isLoading) {
        return <ScreenLoader />;
    }
    return (
        <>
            <Banner />
            <SectionBg backgroundColor="#FFF9EE">
                <Products
                    descriptionTitle="Complete for you"
                    productTitle="Combo"
                    products={products.filter(({ productType }) => productType === 'combo')}
                />
            </SectionBg>
            <SectionBg>
                <Products
                    descriptionTitle="Delicious"
                    productTitle="Burgers"
                    products={products.filter(({ productType }) => productType === 'burger')}
                />
            </SectionBg>
            <SectionBg hasFigures={false} padding="0px">
                <Products
                    descriptionTitle="More?"
                    productTitle="Other"
                    products={products.filter(({ productType }) => productType === 'other')}
                />
            </SectionBg>
            <Footer />
        </>
    );
};

export default App;

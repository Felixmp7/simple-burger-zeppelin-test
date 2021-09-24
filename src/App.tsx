import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Products from 'components/Products';
import SectionBg from 'components/SectionBg';
import useProducts from 'hooks/useProduct';

const App = (): JSX.Element => {
    const { combos, burgers, others } = useProducts();
    return (
        <>
            <Banner />
            <SectionBg backgroundColor="#FFF9EE">
                <Products
                    descriptionTitle="Complete for you"
                    productTitle="Combo"
                    products={combos}
                />
            </SectionBg>
            <SectionBg>
                <Products
                    descriptionTitle="Delicious"
                    productTitle="Burgers"
                    products={burgers}
                />
            </SectionBg>
            <SectionBg hasFigures={false}>
                <Products
                    margin="-50px auto auto auto"
                    descriptionTitle="More?"
                    productTitle="Other"
                    products={others}
                />
            </SectionBg>
            <Footer />
        </>
    );
};

export default App;

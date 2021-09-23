import Banner from 'components/Banner';
import Products from 'components/Products';
import useProducts from 'hooks/useProduct';

const App = (): JSX.Element => {
    const { combos, burgers, others } = useProducts();
    return (
        <>
            <Banner />
            <Products
                backgroundColor="#FFF9EE"
                descriptionTitle="Complete for you"
                productTitle="Combo"
                products={combos}
            />
            <Products
                backgroundColor="#ffffff"
                descriptionTitle="Delicious"
                productTitle="Burgers"
                products={burgers}
            />
            <Products
                backgroundColor="#ffffff"
                descriptionTitle="More?"
                productTitle="Other"
                products={others}
            />
        </>
    );
};

export default App;

import styled from 'styled-components';
import { IProduct } from 'types';
import Title from './Title';
import Product from './widgets/Product';

const ContainerContent = styled.div<{ margin?: string}>`
    margin: ${({ margin }) => margin};
    width: 1200px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .products-container {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        margin: 40px 0;
        width: 100%;
    }
`;

type Props = {
    products: Array<IProduct>;
    descriptionTitle: string;
    productTitle: string;
    margin?: string;
}

const Products = ({
    products, descriptionTitle, productTitle, margin,
}: Props): JSX.Element => (
    <ContainerContent margin={margin}>
        <Title descriptionTitle={descriptionTitle} productTitle={productTitle} />
        <div className="products-container">
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    </ContainerContent>
);

Products.defaultProps = {
    margin: '48.3px auto',
};

export default Products;

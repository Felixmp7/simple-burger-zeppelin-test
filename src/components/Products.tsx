import styled from 'styled-components';
import { IProduct } from 'types';
import Title from './widgets/Title';
import Product from './Product';
import { breakPoints } from '../constants';

const ContainerContent = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    .products-container {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        margin: 40px 0;
        justify-items: center;
        width: 100%;
    }

    @media screen and (max-width: ${breakPoints.laptopMd}) {
        width: 100%;
        .products-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 20px;
        }
    }

    @media screen and (max-width: ${breakPoints.tabletSm}) {
        .products-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
        }
    }
    @media screen and (max-width: ${breakPoints.mobileMd}) {
        .products-container {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
`;

type Props = {
    products: Array<IProduct>;
    descriptionTitle: string;
    productTitle: string;
}

const Products = ({ products, descriptionTitle, productTitle }: Props): JSX.Element => (
    <ContainerContent>
        <Title descriptionTitle={descriptionTitle} productTitle={productTitle} />
        <div className="products-container">
            {products.map((product) => <Product key={product.id} {...product} />)}
        </div>
    </ContainerContent>
);

export default Products;

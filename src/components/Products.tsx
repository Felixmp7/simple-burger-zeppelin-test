import styled from 'styled-components';
import { IProduct } from 'types';
import rightFigure from 'assets/vectors/combos-vector-right.svg';
import leftFigure from 'assets/vectors/combos-vector-left.svg';
import Title from './Title';
import Product from './widgets/Product';

interface IStyles {
    background?: string;
    bgImage?: string;
    left?: number | string;
    right?: number | string;
}

const Section = styled.section<IStyles>`
    overflow: hidden;
    position: relative;
    /* height: 665.1px; */
    background-color: ${({ background }) => background};
`;

const BgFigure = styled.div<IStyles>`
    height: 100%;
    width: 50%;
    background-repeat: repeat-y;
    background-size: cover;
    position: absolute;
    background-position-y: 100%;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
`;

const ContainerContent = styled.div`
    margin: 48.3px auto 0;
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .products-container {
        margin: 40px 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`;

type Props = {
    products: Array<IProduct>;
    descriptionTitle: string;
    productTitle: string;
    backgroundColor: string;
}

const Products = ({
    products, descriptionTitle, productTitle, backgroundColor,
}: Props): JSX.Element => (
    <Section background={backgroundColor}>
        <BgFigure left={0} right="auto" bgImage={leftFigure} />
        <BgFigure right={0} left="auto" bgImage={rightFigure} />
        <ContainerContent>
            <Title descriptionTitle={descriptionTitle} productTitle={productTitle} />
            <div className="products-container">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </ContainerContent>
    </Section>
);

export default Products;

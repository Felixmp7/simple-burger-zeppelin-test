import styled from 'styled-components';

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    .description-title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin-bottom: -15px;
    }
    .description-title {
        font-family: 'Antonio';
        line-height: 0px;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #4C3260;
        text-transform: uppercase;
    }

    .product-title-container {
        position: relative;
        display: flex;
        padding: 0;
    }
`;

const Line = styled.div`
    width: 30.5px;
    border: 1px solid #4C3260;
    margin: 0 9px;
`;

const ProductTitle = styled.h3`
    text-align: center;
    font-family: 'Cocogoose Pro Block';
    font-size: 40px;
    line-height: 0px;
    z-index: 1;
    color: #FFFBFB;
    text-shadow: 0 0 2px #4C3260;
    text-transform: uppercase;
`;

const ProductShadow = styled.h3`
    text-align: center;
    position: absolute;
    z-index: 0;
    font-family: 'Cocogoose Shadow';
    font-size: 40px;
    left: 4px;
    top: 2px;
    line-height: 0px;
    color: #4C3260;
    text-transform: uppercase;
    text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.07);
`;

type Props = {
    descriptionTitle?: string;
    productTitle?: string;
};

const Title = ({ descriptionTitle, productTitle } :Props) :JSX.Element => (
    <Container>
        <div className="description-title-container">
            <Line />
            <h2 className="description-title">{descriptionTitle}</h2>
            <Line />
        </div>
        <div className="product-title-container">
            <ProductTitle>{productTitle}</ProductTitle>
            <ProductShadow>{productTitle}</ProductShadow>
        </div>
    </Container>
);

Title.defaultProps = {
    descriptionTitle: 'Description title',
    productTitle: 'Title',
};

export default Title;

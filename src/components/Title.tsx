import styled from 'styled-components';

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;
const DescriptionTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-bottom: -15px;
`;

const DescriptionTitle = styled.h2`
    font-family: 'Antonio';
    line-height: 0px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #4C3260;
    text-transform: uppercase;
`;

const ProductTitleContainer = styled.div`
    position: relative;
    display: flex;
    padding: 0;
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
    descriptionTitle: string;
    productTitle: string;
}

const Title = ({ descriptionTitle = 'Titulo', productTitle = 'Subtitulo' } :Props) :JSX.Element => (
    <Container>
        <DescriptionTitleContainer>
            <Line />
            <DescriptionTitle>{descriptionTitle}</DescriptionTitle>
            <Line />
        </DescriptionTitleContainer>
        <ProductTitleContainer>
            <ProductTitle>{productTitle}</ProductTitle>
            <ProductShadow>{productTitle}</ProductShadow>
        </ProductTitleContainer>
    </Container>
);

export default Title;

import { FC, ReactChild } from 'react';
import styled from 'styled-components';
import rightFigure from 'assets/vectors/combos-vector-right.svg';
import leftFigure from 'assets/vectors/combos-vector-left.svg';
import { breakPoints } from '../constants';

interface IStyles {
    background?: string;
    bgImage?: string;
    left?: number | string;
    right?: number | string;
    padding?: string;
}

const Section = styled.section<IStyles>`
    overflow: hidden;
    position: relative;
    background-color: ${({ background }) => background};
    border-radius: 0 0 40px 40px;
    padding: ${({ padding }) => padding};
`;

const BgFigure = styled.div<IStyles>`
    height: 100%;
    width: 50%;
    background-size: cover;
    position: absolute;
    background-position-y: 80%;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    left: ${({ left }) => left};
    right: ${({ right }) => right};

    @media screen and (max-width: ${breakPoints.laptopMd}) {
        display: none;
    }
`;

interface IProps {
    children: ReactChild;
    backgroundColor?: string | undefined;
    hasFigures?: boolean | undefined;
    padding?: string;
}

const SectionBg: FC<IProps> = ({
    children, backgroundColor, hasFigures, padding,
}) => (
    <Section background={backgroundColor} padding={padding}>
        {hasFigures && (
            <>
                <BgFigure left={0} right="auto" bgImage={leftFigure} />
                <BgFigure right={0} left="auto" bgImage={rightFigure} />
            </>
        )}
        {children}
    </Section>
);

SectionBg.defaultProps = {
    backgroundColor: '#fff',
    hasFigures: true,
    padding: '48.3px 0',
};

export default SectionBg;

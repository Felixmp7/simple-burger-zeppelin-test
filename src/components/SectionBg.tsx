import { FC, ReactChild } from 'react';
import styled from 'styled-components';
import rightFigure from 'assets/vectors/combos-vector-right.svg';
import leftFigure from 'assets/vectors/combos-vector-left.svg';

interface IStyles {
    background?: string;
    bgImage?: string;
    left?: number | string;
    right?: number | string;
}

const Section = styled.section<IStyles>`
    overflow: hidden;
    position: relative;
    background-color: ${({ background }) => background};
    border-radius: 0 0 40px 40px;
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
`;

interface IProps {
    children: ReactChild;
    backgroundColor?: string | undefined;
    hasFigures?: boolean | undefined;
}

const SectionBg: FC<IProps> = ({ children, backgroundColor, hasFigures }) => (
    <Section background={backgroundColor}>
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
};

export default SectionBg;

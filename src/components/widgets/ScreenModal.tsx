import { ReactChild } from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../constants';

const Modal = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, #000000 100%);
    backdrop-filter: blur(20px);
    overflow-y: auto;

    .container-detail-layout {
        width: 576px;
        margin: 80px auto;
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
        .container-detail-layout {
            width: 90vw;
        }
    }

    @media screen and (max-width: ${breakPoints.mobileSm}) {
        .container-detail-layout {
            width: 288px;
        }
    }
`;

const ScreenModal = ({ children }: { children: ReactChild}) :JSX.Element => (
    <Modal>
        <div className="container-detail-layout">
            {children}
        </div>
    </Modal>
);

export default ScreenModal;

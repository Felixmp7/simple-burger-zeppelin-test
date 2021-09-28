import { ReactChild } from 'react';
import styled from 'styled-components';

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
`;

type ChildrenProps = {
    children: ReactChild;
};

const ScreenModal = ({ children }: ChildrenProps) :JSX.Element => (
    <Modal>
        {children}
    </Modal>
);

export default ScreenModal;

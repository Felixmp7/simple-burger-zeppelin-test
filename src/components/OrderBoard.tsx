import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import useDNDProducts from 'hooks/useDNDProducts';
import BoardColumn from './BoardColumn';
import { doneStatus, inProcessStatus, pendingStatus } from '../constants';
import DeliveryTime from './widgets/DeliveryTime';

const Container = styled.div`
    .container-grid {
        height: 80vh;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 3rem;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
`;

const OrderBoard = (): JSX.Element => {
    const {
        allList: {
            pending: pendings,
            inProcess,
            done,
        }, onDragEnd,
    } = useDNDProducts();

    if (!pendings.length && !inProcess.length && !done.length) {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            <div className="header-content">
                <h2>Order</h2>
                <DeliveryTime />
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="container-grid">
                    <BoardColumn
                        droppableId={pendingStatus}
                        titleColor="gray"
                        columnTitle="Pendings"
                        orderList={pendings}
                    />
                    <BoardColumn
                        droppableId={inProcessStatus}
                        titleColor="blue"
                        columnTitle="In Process"
                        orderList={inProcess}
                    />
                    <BoardColumn
                        droppableId={doneStatus}
                        titleColor="green"
                        columnTitle="Done"
                        orderList={done}
                    />
                </div>
            </DragDropContext>
        </Container>
    );
};

export default OrderBoard;

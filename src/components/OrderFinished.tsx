import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import useDragAndDrop from 'hooks/useDragAndDrop';
import OrderColumn from './OrderColumn';
import { doneStatus, inProcessStatus, pendingStatus } from '../constants';

const Container = styled.div`
    .container-grid {
        height: 80vh;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 3rem;
    }
`;

const OrderFinished = (): JSX.Element => {
    const {
        allList: {
            pending: pendings,
            inProcess,
            done,
        }, onDragEnd,
    } = useDragAndDrop();

    return (
        <Container>
            <h2>Orders</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="container-grid">
                    <OrderColumn
                        droppableId={pendingStatus}
                        titleColor="gray"
                        columnTitle="Pendings"
                        orderList={pendings}
                    />
                    <OrderColumn
                        droppableId={inProcessStatus}
                        titleColor="blue"
                        columnTitle="In Process"
                        orderList={inProcess}
                    />
                    <OrderColumn
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

export default OrderFinished;

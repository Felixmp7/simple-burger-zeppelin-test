import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import useDNDProducts from 'hooks/useDNDProducts';
import BoardColumn from './BoardColumn';
import { doneStatus, inProcessStatus, pendingStatus } from '../constants';

const Container = styled.div`
    .container-grid {
        height: 80vh;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 3rem;
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

    return (
        <Container>
            <h2>Orders</h2>
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

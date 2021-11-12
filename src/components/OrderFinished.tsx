import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import useDragAndDrop from 'hooks/useDragAndDrop';
import OrderColumn from './OrderColumn';

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
        pendings,
        inProcess,
        done,
        onDragEnd,
    } = useDragAndDrop();

    return (
        <Container>
            <h2>Orders</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="container-grid">
                    <Droppable droppableId="0">
                        {({ innerRef }) => (
                            <OrderColumn
                                draggableRef={innerRef}
                                titleColor="gray"
                                columnTitle="Pendings"
                                orderList={pendings}
                            />
                        )}
                    </Droppable>
                    <Droppable droppableId="1">
                        {({ innerRef }) => (
                            <OrderColumn
                                draggableRef={innerRef}
                                titleColor="blue"
                                columnTitle="In Process"
                                orderList={inProcess}
                            />
                        )}
                    </Droppable>
                    <Droppable droppableId="2">
                        {({ innerRef }) => (
                            <OrderColumn
                                draggableRef={innerRef}
                                titleColor="green"
                                columnTitle="Done"
                                orderList={done}
                            />
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </Container>
    );
};

export default OrderFinished;

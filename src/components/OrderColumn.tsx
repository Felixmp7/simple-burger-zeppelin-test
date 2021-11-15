/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from 'styled-components';
import { IProduct } from 'types';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Column = styled.div<{ titleColor: string }>`
    -moz-box-shadow: 0px 3px 6px 0px #919191;
    -webkit-box-shadow: 0px 3px 6px 0px #919191;
    box-shadow: 0px 3px 6px 0px #919191;
    padding: 1rem;
    grid-column: auto;
    border-radius: 1rem;
    background-color: #fdfdfd;
    color: #444;
    list-style-type: none;

    h3 {
        margin: 0;
        color: ${({ titleColor }) => {
        if (titleColor === 'blue') return '#0059ac';
        if (titleColor === 'green') return '#00ac39';
        return 'gray';
    }};
        font-weight: 300;
        padding-bottom: .5rem;
        border-bottom: 1px solid #91919188;
    }

    > ul {
        padding: 1rem 0;
        list-style-type: none;
        margin: 0;
        font-size: 14px;

        > li {
            background-color: white;
            border-radius: .2rem 1rem .5rem .5rem;
            border: 1px solid #91919188;
            margin-bottom: 1rem;
            padding: 1rem;

            > .header-card {
                display: flex;
                justify-content: space-between;
                align-items: center;

                > span {
                    font-size: 18px;
                    color: black;
                }
                > .order-id { font-size: 10px; }
            }

            > .details-grid {
                margin-top: 1.4rem;
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 2rem;
            }

            > .toppings-container {
                margin-top: 1rem;

                span { margin-left: 4px; }
            }

        }
    }
`;

interface IProps {
    columnTitle: string;
    droppableId: string;
    titleColor: 'gray' | 'blue' |'green';
    orderList: Array<IProduct>;
}

const OrderColumn = ({
    orderList, columnTitle, titleColor, droppableId,
}: IProps): JSX.Element => (
    <Column titleColor={titleColor}>
        <h3>{columnTitle}</h3>
        <Droppable droppableId={droppableId}>
            {({ innerRef, placeholder }) => (
                <ul ref={innerRef}>
                    {orderList.map(({
                        productOrderId, name, additionals: { sodaFlavour, size, toppings },
                    }, index) => (
                        <Draggable key={productOrderId} draggableId={productOrderId!} index={index}>
                            {(provided) => (
                                <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <div className="header-card">
                                        <span>{name}</span>
                                        <b className="order-id">{`id: ${productOrderId}`}</b>
                                    </div>
                                    {size || sodaFlavour ? (
                                        <div className="details-grid">
                                            {size ? (
                                                <div>
                                                    <b>Size:</b>
                                                    {` ${size.name}`}
                                                </div>
                                            ) : null}
                                            {sodaFlavour ? (
                                                <div>
                                                    <b>Soda flavour:</b>
                                                    {` ${sodaFlavour}`}
                                                </div>
                                            ) : null}
                                        </div>
                                    ) : null}
                                    {toppings?.length ? (
                                        <div className="toppings-container">
                                            <b>Toppings:</b>
                                            <span>{toppings.join(', ')}</span>
                                        </div>
                                    ) : null}
                                </li>
                            )}
                        </Draggable>
                    ))}
                    {placeholder}
                </ul>
            )}
        </Droppable>
    </Column>
);

export default OrderColumn;

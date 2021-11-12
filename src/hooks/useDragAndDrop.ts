import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { IProduct } from 'types';
import useShoppingCart from './useShoppingCart';

const useDragAndDrop = () => {
    const { shopList } = useShoppingCart();
    const pendings = shopList.filter(({ status }) => status === null);
    const inProcess = shopList.filter(({ status }) => status === 'inProcess');
    const done = shopList.filter(({ status }) => status === 'done');
    const [allList, setAllList] = useState([pendings, inProcess, done]);

    const reorder = (list: Array<IProduct>, startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const move = (source: Array<IProduct>, destination: Array<IProduct>, droppableSource: any, droppableDestination: any) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {
            [droppableSource.droppableId]: sourceClone,
            [droppableDestination.droppableId]: destClone,
        };

        return result;
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(allList[sInd], source.index, destination.index);
            const newState = [...allList];
            newState[sInd] = items;
            setAllList(newState);
        } else {
            const items = move(allList[sInd], allList[dInd], source, destination);
            const newState = [...allList];
            newState[sInd] = items[sInd];
            newState[dInd] = items[dInd];

            setAllList([...newState]);
        }
    };

    return {
        pendings: allList[0],
        inProcess: allList[1],
        done: allList[2],
        onDragEnd,
    };
};

export default useDragAndDrop;

import produce from 'immer';
import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { IProduct } from 'types';
import useShoppingCart from './useShoppingCart';
import { doneStatus, inProcessStatus, pendingStatus } from '../constants';

interface IUseDNDProductsProps {
    allList: IStatusList;
    onDragEnd: (result: DropResult) => void;
}
interface IStatusList {
    [key: string]: Array<IProduct> | [];
}

type DroppableSource = {
    droppableId: string;
    index: number;
};

const useDNDProducts = (): IUseDNDProductsProps => {
    const { shopList, updateStatus } = useShoppingCart();
    const pending = shopList.filter(({ status }) => status === pendingStatus);
    const inProcess = shopList.filter(({ status }) => status === inProcessStatus);
    const done = shopList.filter(({ status }) => status === doneStatus);
    const [allList, setAllList] = useState<IStatusList>({ pending, inProcess, done });

    const reorder = (list: Array<IProduct>, startIndex: number, endIndex: number) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const move = (source: Array<IProduct>, destination: Array<IProduct>, droppableSource: DroppableSource, droppableDestination: DroppableSource) => {
        const sourceClone = [...source];
        const destClone = [...destination];
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        const removedUpdated = { ...removed, status: droppableDestination.droppableId };
        const { productOrderId, status } = removedUpdated;

        destClone.splice(droppableDestination.index, 0, removedUpdated);

        const result = {
            [droppableSource.droppableId]: sourceClone,
            [droppableDestination.droppableId]: destClone,
        };

        updateStatus({ productOrderId, status });

        return result;
    };

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const sInd = source.droppableId;
        const dInd = destination.droppableId;
        const droppedOnTheSameColumn = sInd === dInd;

        if (droppedOnTheSameColumn) {
            const listSorted = reorder(allList[sInd], source.index, destination.index);
            const newState = produce(allList, (draft) => { draft[sInd] = listSorted; });
            setAllList(newState);
        } else {
            const listSorted = move(allList[sInd], allList[dInd], source, destination);
            const newState = produce(allList, (draft) => {
                draft[sInd] = listSorted[sInd];
                draft[dInd] = listSorted[dInd];
            });
            setAllList(newState);
        }
    };

    return { allList, onDragEnd };
};

export default useDNDProducts;

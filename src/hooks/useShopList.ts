import { SetterOrUpdater, useRecoilState } from 'recoil';
import shopListAtom from 'recoilState';
import { IProduct } from 'types';

type ShopListProps = {
    shopList: Array<IProduct>;
    getTotalPrice: () => string;
    setShopList: SetterOrUpdater<Array<IProduct>>;
    handleAddOrRemove: (product: IProduct, isRemove: boolean) => void;
};

const useShopList = (): ShopListProps => {
    const [shopList, setShopList] = useRecoilState(shopListAtom);

    const handleAddOrRemove = (product: IProduct, isRemove: boolean): void => {
        const result: Array<IProduct> = [...shopList];
        if (isRemove) {
            const orderIndex = shopList.findIndex(({ id }) => id === product.id);
            result.splice(orderIndex, 1);
        } else {
            result.push(product);
        }
        setShopList(result);
    };

    const getTotalPrice = () => {
        const total = shopList.reduce((totalPrice, { price }) => totalPrice + parseFloat(price), 0);
        return total.toFixed(2);
    };

    return {
        shopList,
        getTotalPrice,
        setShopList,
        handleAddOrRemove,
    };
};

export default useShopList;

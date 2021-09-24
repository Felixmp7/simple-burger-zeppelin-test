import { SetterOrUpdater, useRecoilState } from 'recoil';
import { shopCountAtom, shopListAtom } from 'recoilState';

type ShopListProps = {
    shopList: Array<any>;
    shopCount: string;
    setShopList: SetterOrUpdater<never[]>;
    setShopCount: SetterOrUpdater<string>;
    handleAddOrRemove: any;
};

const useShopList = (): ShopListProps => {
    const [shopList, setShopList] = useRecoilState(shopListAtom);
    const [shopCount, setShopCount] = useRecoilState<string>(shopCountAtom);

    const handleAddOrRemove = (isRemove: boolean, price: string): void => {
        let result: string;
        const priceNumber = parseFloat(price);
        const shopCountNumber = parseFloat(shopCount);
        if (isRemove) {
            result = (shopCountNumber - priceNumber).toFixed(2);
        } else {
            result = (shopCountNumber + priceNumber).toFixed(2);
        }
        setShopCount(result);
    };

    return {
        shopList,
        shopCount,
        setShopList,
        setShopCount,
        handleAddOrRemove,
    };
};

export default useShopList;

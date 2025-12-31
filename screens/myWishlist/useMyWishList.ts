import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../service/redux/rootReducer';
import {
  addToWishList,
  storeCartData,
} from '../../service/redux/storeData/storeDataSlice';

const useMyWishList = () => {
  const dispatch = useDispatch();

  const getWishListData = useSelector(
    (state: RootState) => state.storeData.getWishList,
  );

  const cartData = useSelector((state: RootState) => state.storeData.cartData);

  const storeInCartData = (data: any) => {
    const updated = [...cartData, data];
    dispatch(storeCartData(updated));
  };

  const toggleWish = (data: any) => {
    const exists = getWishListData.some(item => item.id === data.id);

    let newList;
    if (exists) {
      newList = getWishListData.filter(item => item.id !== data.id);
    } else {
      newList = [...getWishListData, data];
    }

    dispatch(addToWishList(newList));
  };
  return {
    getWishListData,
    cartData,
    storeInCartData,
    toggleWish,
  };
};

export default useMyWishList;

import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useAppSelector } from '@hooks/useRedux';
import { CartItem, CreateDealItem } from '@screens/menuDetail/menuDetailProps';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../service/redux/rootReducer';
import {
  storeCartData,
  storeCreateData,
} from '../../service/redux/storeData/storeDataSlice';

const useCreateDeal = () => {
  const navigation = useAuthNavigation();
  const dispatch = useDispatch();

  const cartData = useSelector(
    (state: RootState) => state.storeData.cartData,
  ) as CartItem[];
  const { dealsData, deals } = useAppSelector(state => state.storeData);

  const [reset, setReset] = useState(false);

  const anySelected =
    dealsData?.createDealsData?.length > 0 &&
    dealsData.createDealsData.every(requiredDeal => {
      const existingDeal = deals.find(d => d.id === requiredDeal.id);
      if (!existingDeal) return false;
      const required = requiredDeal.selectItem || 0;
      const selectedCount = existingDeal.data.filter(d => d.selected).length;
      return selectedCount === required;
    });

  const StoreDATA = (item: CreateDealItem) => {
    const existingDeal = deals.find(d => d.id === item.id);
    const dealToSave = existingDeal ? existingDeal : item;
    dispatch(storeCreateData(dealToSave));
    navigation.navigate('mealDeal', {
      id: dealToSave.id,
      name: dealsData.text,
    });
  };

  const storeInCart = (deal: CreateDealItem) => {
    const selectedItems = deal.data.filter(d => d.selected);
    if (selectedItems.length === 0) return;
    const selectedSize = selectedItems.map(s => s.text);
    const cartItem: CartItem = {
      id: deal.id,
      cartID: deal.cartID,
      pizzaName: dealsData.text,
      price: deal.price,
      quantity: 1,
      image: deal.backImage,
      selectedSize,
    };
    const existingItemIndex = cartData.findIndex(
      item =>
        item.id === cartItem.id &&
        item.cartID === cartItem.cartID &&
        JSON.stringify(item.selectedSize) ===
          JSON.stringify(cartItem.selectedSize),
    );
    const updatedCart =
      existingItemIndex >= 0
        ? cartData.map((item, idx) =>
            idx === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...cartData, cartItem];
    dispatch(storeCartData(updatedCart));
  };

  return {
    deals,
    anySelected,
    dealsData,
    StoreDATA,
    storeInCart,
    navigation,
    setReset,
    reset,
  };
};

export default useCreateDeal;

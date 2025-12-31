import { useAuthRoute } from '@hooks/useAppNavigation';
import { useAppSelector } from '@hooks/useRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { topTabData } from './menuDetail.const';
import { CartItem } from '@screens/createDeals/createDealsProps';
import {
  addToWishList,
  storeCartData,
} from '../../service/redux/storeData/storeDataSlice';
import { PizzaItem } from './menuDetailProps';

const useMenuDetail = () => {
  const route = useAuthRoute('menuDetail');

  let data = route.params.data.name;

  const { pizzaData } = useAppSelector(state => state.storeData);

  const cartData = useAppSelector(state => state.storeData.cartData);
  const getWishListData = useAppSelector(state => state.storeData.getWishList);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredData, setFilteredData] = useState<any[]>(
    pizzaData?.data ?? [],
  );
  const [selectedSizes, setSelectedSizes] = useState<
    Record<number, SelectedSize>
  >({});
  const [openPopupId, setOpenPopupId] = useState<number | null>(null);

  const dispatch = useDispatch();

  const togglePopup = (id: number) => {
    setOpenPopupId(openPopupId === id ? null : id);
  };

  const handleTabPress = (index: number) => {
    setSelectedIndex(index);
    const selectedCategory = topTabData[index].title;
    const allItems = pizzaData?.data ?? [];

    if (selectedCategory === 'All Items') {
      setFilteredData(allItems);
    } else {
      setFilteredData(
        allItems.filter(item => item.category === selectedCategory),
      );
    }
  };

  const storeInCartData = (item: PizzaItem) => {
    let defaultSize: string = item.selectedSize ?? '';
    let defaultPrice: string = item.price;

    if (item.size?.length) {
      defaultSize = item.size[0].size;
      defaultPrice = item.size[0].price;
    }

    const selected = selectedSizes[item.id] ?? {
      size: defaultSize,
      price: defaultPrice,
    };

    const cartItem: CartItem = {
      id: item.id,
      cartID: item.id,
      pizzaName: item.pizzaName,
      price: parseFloat(selected.price.replace(/[^\d.]/g, '')) || 0,
      quantity: 1,
      image: item.image,
      selectedSize: [selected.size],
    };

    const existingIndex = cartData.findIndex(
      i =>
        i.id === cartItem.id &&
        i.selectedSize.join(',') === cartItem.selectedSize.join(','),
    );

    let updatedCart: CartItem[];
    if (existingIndex >= 0) {
      updatedCart = cartData.map((i, idx) =>
        idx === existingIndex ? { ...i, quantity: i.quantity + 1 } : i,
      );
    } else {
      updatedCart = [...cartData, cartItem];
    }

    dispatch(storeCartData(updatedCart));
  };

  const addToWish = (item: PizzaItem) => {
    let defaultSize: string = item.selectedSize ?? '';
    let defaultPrice: string = item.price;

    if (item.size?.length) {
      defaultSize = item.size[0].size;
      defaultPrice = item.size[0].price;
    }

    const selected = selectedSizes[item.id] ?? {
      size: defaultSize,
      price: defaultPrice,
    };

    const wishItem: PizzaItem = {
      ...item,
      selectedSize: selected.size,
      price: selected.price,
    };

    const exists = getWishListData.some(
      i => i.id === wishItem.id && i.selectedSize === wishItem.selectedSize,
    );

    const newList = exists
      ? getWishListData.filter(
          i =>
            !(i.id === wishItem.id && i.selectedSize === wishItem.selectedSize),
        )
      : [...getWishListData, wishItem];

    dispatch(addToWishList(newList));
  };

  return {
    addToWish,
    storeInCartData,
    handleTabPress,
    togglePopup,
    openPopupId,
    setOpenPopupId,
    selectedSizes,
    setSelectedSizes,
    filteredData,
    setFilteredData,
    selectedIndex,
    setSelectedIndex,
    data,
    getWishListData,
  };
};

export default useMenuDetail;

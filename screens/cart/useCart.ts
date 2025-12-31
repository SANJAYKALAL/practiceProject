import {
  useAuthNavigation,
  useBottomTabNavigation,
} from '@hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../..//service/redux/rootReducer';
import { storeCartData } from '../../service/redux/storeData/storeDataSlice';

const useCart = () => {
  const cartData = useSelector((state: RootState) => state.storeData.cartData);

  const dispatch = useDispatch();
  const navigation = useAuthNavigation('cart');
  const bottomNavigation = useBottomTabNavigation();

  const [groupedData, setGroupedData] = useState<any[]>([]);

  useEffect(() => {
    const grouped = cartData.reduce((acc: any[], item: any) => {
      const existing = acc.find(
        pizza =>
          pizza.pizzaName === item.pizzaName &&
          pizza.selectedSize === item.selectedSize,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    setGroupedData(grouped);
  }, [cartData]);

  const updateQuantity = (
    pizzaName: string,
    selectedSize: string,
    type: 'increase' | 'decrease',
  ) => {
    const updated = groupedData
      .map(pizza =>
        pizza.pizzaName === pizzaName && pizza.selectedSize === selectedSize
          ? {
              ...pizza,
              quantity:
                type === 'increase'
                  ? pizza.quantity + 1
                  : pizza.quantity > 1
                  ? pizza.quantity - 1
                  : 0,
            }
          : pizza,
      )
      .filter(pizza => pizza.quantity > 0);

    setGroupedData(updated);

    const flattened = updated.flatMap(pizza =>
      Array.from({ length: pizza.quantity }, () => ({
        ...pizza,
        quantity: undefined,
      })),
    );

    dispatch(storeCartData(flattened));
  };

  const addToCart = (item: any) => {
    const newItem = {
      id: item.id ?? Date.now(),
      pizzaName: item.pizzaName ?? item.name,
      price: item.price,
      image: item.image,
      selectedSize: item.selectedSize || '',
    };

    const updated = [...cartData, newItem];
    dispatch(storeCartData(updated));
  };

  const subtotal = groupedData.reduce((sum, item) => {
    const price = item.price
      ? Number(String(item.price).replace(/[^\d.-]/g, ''))
      : 0;
    return sum + price * item.quantity;
  }, 0);

  const totalAmount = subtotal;

  return {
    totalAmount,
    addToCart,
    updateQuantity,
    groupedData,
    cartData,
    subtotal,
    navigation,
    bottomNavigation,
  };
};

export default useCart;

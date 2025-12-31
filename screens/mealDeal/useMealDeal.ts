import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { useAuthNavigation } from '@hooks/useAppNavigation';
import { Deal, RouteParams } from './mealsDealsProps';
import { RootState } from '../../service/redux/rootReducer';
import { useEffect, useState } from 'react';
import { MealItem } from '@screens/menuDetail/menuDetailProps';
import { updateMealData } from '../../service/redux/storeData/storeDataSlice';

const useMealDeal = () => {
  const navigation = useAuthNavigation();
  const dispatch = useDispatch();

  const route = useRoute();
  const { id, name } = route.params as RouteParams;

  const createMealData: Deal | undefined = useSelector((state: RootState) =>
    state.storeData.deals.find(d => d.id === id),
  );

  const [mealData, setMealData] = useState<MealItem[]>(
    createMealData?.data || [],
  );

  useEffect(() => {
    if (createMealData?.data) {
      setMealData(createMealData.data);
    }
  }, [createMealData]);

  const toggleSelect = (itemId: number) => {
    const selectedCount = mealData.filter(item => item.selected).length;

    const updatedData = mealData.map(item =>
      item.id === itemId
        ? item.selected
          ? { ...item, selected: false }
          : selectedCount < (createMealData?.selectItem || 0)
          ? { ...item, selected: true }
          : item
        : item,
    );

    setMealData(updatedData);
  };

  const isSelectionFull =
    mealData.filter(item => item.selected).length >=
    (createMealData?.selectItem || 0);

  const storeData = () => {
    if (!createMealData) return;

    const updatedDeal: Deal = {
      ...createMealData,
      isSelected: mealData.some(item => item.selected),
      data: mealData,
    };

    dispatch(updateMealData(updatedDeal));
    navigation.goBack();
  };

  return {
    mealData,
    toggleSelect,
    storeData,
    createMealData,
    name,
    isSelectionFull,
  };
};

export default useMealDeal;

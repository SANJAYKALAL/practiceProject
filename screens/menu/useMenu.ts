import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useDispatch } from 'react-redux';
import { storePizzaData } from '../../service/redux/storeData/storeDataSlice';

const useMenu = () => {
  const navigation = useAuthNavigation();

  const dispatch = useDispatch();

  const storeInPizzaData = (data: any) => {
    dispatch(storePizzaData(data));
    navigation.navigate('menuDetail', { data: data });
  };
  return {
    storeInPizzaData,
  };
};

export default useMenu;

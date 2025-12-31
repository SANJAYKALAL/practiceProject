import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useDispatch } from 'react-redux';
import { storeDealsData } from '../../service/redux/storeData/storeDataSlice';

const useDeal = () => {
  const navigation = useAuthNavigation();

  const dispatch = useDispatch();

  const storedata = (data: DealData[]) => {
    dispatch(storeDealsData(data));
    navigation.navigate('createDeals');
  };

  return {
    storedata,
  };
};

export default useDeal;

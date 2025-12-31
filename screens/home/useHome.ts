import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabNavigation } from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useHome = () => {
  const insets = useSafeAreaInsets();
  const [value, setValue] = useAppState({});
  const navigation = useBottomTabNavigation();

  return {
    value,
    insets,
    navigation,
  };
};

export default useHome;

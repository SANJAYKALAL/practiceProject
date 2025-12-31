import { NavigationContainer } from '@react-navigation/native';
import RootStack from './stack/RootStack';

const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Root;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackScreens } from './rootStack.const';
import { RootStackParams } from './rootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      {stackScreens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;

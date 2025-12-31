import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/service/redux/store';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const persistStore = store();

  return (
    <SafeAreaProvider>
      <Provider store={persistStore.store}>
        <PersistGate persistor={persistStore.persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './navigator';
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers";
import { Provider } from "react-redux";


export default function App() {
  const store = configureStore({ reducer: allReducers });
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigator />
        <StatusBar />
      </Provider>
    </SafeAreaProvider>
  );
}


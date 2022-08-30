import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import MainNavigator from './src/navigation/MainNavigator';
import { store } from "./src/redux/store";

export default function App() {

  let [fontsLoaded] = useFonts({
    Hind_400Regular: require("./src/assets/fonts/Hind-Regular.ttf"),
    Hind_600SemiBold: require("./src/assets/fonts/Hind-SemiBold.ttf"),
    Hind_700Bold: require("./src/assets/fonts/Hind-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  else {
    return (
      <Provider store={store}>
         <MainNavigator/>
      </Provider>
      );
  }

}

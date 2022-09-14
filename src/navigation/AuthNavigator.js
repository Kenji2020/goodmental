import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPassword from "../screens/ForgotPassword";
import VerifyPhoneNumber from "../screens/VerifyPhoneNumber";
import ResetPassword from "../screens/ResetPassword";
import ResetConfirmation from "../screens/ResetConfirmation";
import ConfirmationCode from "../screens/ConfirmationCode";
import AccountConfirmation from "../screens/AccountConfirmation";
import Home from "../screens/Home";
import Terms from "../screens/Terms";
const Stack = createNativeStackNavigator();

export default function ScreenNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumber} />

      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetConfirmation" component={ResetConfirmation} />
      <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmation} />
      <Stack.Screen name="Terms" component={Terms}/>

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

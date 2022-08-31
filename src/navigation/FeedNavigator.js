import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AllCoursesScreen from "../screens/AllCoursesScreen";
import CourseDetails from "../screens/CourseDetails";
import EditProfile from "../screens/EditProfile";
import PaymentMethod from "../screens/PaymentMethod";
import PaymentInfo from "../screens/PaymentInfo";
import AddNewCart from "../screens/AddNewCart";
import OrderDone from "../screens/OrderDone";
import Reviews from "../screens/Reviews";
import AllCategory from "../screens/AllCategory";
import MyOrder from "../screens/MyOrder";
import CourseVideo from "../screens/CourseVideo";
import Checkout from "../screens/Checkout";
import PostScreen from '../screens/PostScreen'
import EscribirArticulo from "../screens/EscribirArticulo";
import DescripcionPsicologos from "../screens/DescripcionPsicologos";

const Stack = createNativeStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllCourses" component={AllCoursesScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
      <Stack.Screen name="AddNewCart" component={AddNewCart} />
      <Stack.Screen name="OrderDone" component={OrderDone} />
      <Stack.Screen name="Review" component={Reviews} />
      <Stack.Screen name="AllCategory" component={AllCategory} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="CourseVideo" component={CourseVideo} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="PostScreen" component={PostScreen}/>
      <Stack.Screen name="EscribirArticulo" component={EscribirArticulo}/>
      <Stack.Screen name="DescripcionPsicologos" component={DescripcionPsicologos}/>


    </Stack.Navigator>
  );
}

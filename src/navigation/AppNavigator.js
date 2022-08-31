import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import FeedNavigator from './FeedNavigator';
import Search from './../screens/Search';
import Cart from './../screens/Cart';
import CartButton from './CartButton';
import WishList from './../screens/WishList';
import Profile from "../screens/Profile";
import CrearBlogScreen from "../screens/BlogScreen";
import { colors } from "../theme";


const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  const wishListItems = useSelector(state => state.wishlist.wishlistItems);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      // backBehavior="none"
      >
        <Tab.Screen
          name="Feed"
          component={FeedNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" size={size} color={color} />
            )
          }}
        />



        <Tab.Screen
          name="CrearBlogScreen"
          component={CrearBlogScreen}

          options={({ navigation }) => ({
            tabBarButton: () => (
              <CartButton onPress={() => navigation.navigate('CrearBlogScreen')} />
            ),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shopping-outline" size={size} color={color} />
            )

          })}
        />


        <Tab.Screen
          name="WishList"
          component={WishList}
          options={{
            tabBarBadgeStyle:{backgroundColor:colors.red},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="brain" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" size={size} color={color} />
            )
          }}
        />

      </Tab.Navigator>
    </>
  )
}

export default AppNavigator;

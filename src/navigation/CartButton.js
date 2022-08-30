import React from "react";
import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from './../theme/colors';
import adjust from "../theme/adjust";
import { useSelector } from "react-redux";


function CartButton({ onPress }) {
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="shopping-outline"
          size={30} color={colors.white} />
        <View style={styles.cartItem}>
            <Text style={styles.text}>{cartItems.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 6,
    bottom: 20,
    height: 65,
    justifyContent: "center",
    width: 65,
    position:'relative'
  },
  cartItem:{
    width:adjust(20),
    height:adjust(20),
    borderRadius:35,
    backgroundColor:colors.red,
    position:'absolute',
    top:5,
    right:5,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:colors.white,
    fontSize:12,
    fontWeight:'700'
  }
});

export default CartButton;

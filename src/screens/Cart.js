import { View,Text,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from 'react-native-virtualized-view';
import { useDispatch, useSelector } from 'react-redux';

import { colors, spacing } from '../theme';
import Header from '../components/Header';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { removeToCart } from '../redux/features/cartSlice';
import Screen from '../components/Screen';

export default function Cart({ navigation }) {
  const cartData = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();



  function EmptyCart() {
    return (
      <View style={styles.emptyBoxWrapper}>
        <View style={styles.emptyBox}>
          <Image source={require('../assets/images/cart/empty-cart.png')} />
          <View style={styles.emptyTextContainer}>
            <AppText style={styles.emptyTitle} preset='h4'>Your Cart is Empty</AppText>
            <AppText style={styles.emptySubTitle}>{'Looks like you haven’t made \nyour order yet.'}</AppText>
          </View>

          <AppButton onPress={() => navigation.navigate("AllCourses")} title="Collect Course" />
        </View>
      </View>
    )
  }

  function cartItem() {
    return (
      <>
      <FlatList
        data={cartData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ position: 'relative' }}>
            <View style={styles.cartItem}>
              <View style={{ position: 'relative' }}>
                <Image
                  resizeMode="cover"
                  style={styles.cartImg}
                  source={item.image}
                />
                <View style={{ position: 'absolute', top: 30, width: 50, height: 25, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: colors.white, fontWeight: '700' }}>${item.price}</Text>
                </View>
              </View>
              <View style={styles.cartDetails}>
                <View style={styles.cartContent}>
                  <AppText preset="h5"
                    style={styles.cartTitle} >
                    {item.title}
                  </AppText>
                </View>

                <View style={styles.cartBottomContent}>
                  <View style={styles.cartBottomText}>
                    <Entypo name="dot-single" size={24}
                      color={colors.gray3} />
                    <AppText style={styles.text}>
                      {item.expert}
                    </AppText>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={() => dispatch(removeToCart(item))} style={{ position: 'absolute', top: 5, right: 8 }}>
              <FontAwesome5 name="times" size={18} color={colors.red} />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={{marginTop:25}}>
         <AppButton onPress={()=> navigation.navigate("Checkout")} title="Proceed to checkout" />
      </View>
      </>
    )
  }
  return (
    <>
    <Header title="Cart" goBack={false} style={{backgroundColor:colors.light}} />
    <Screen  style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{paddingBottom:30,paddingHorizontal:20}}
        showsVerticalScrollIndicator={false}
      >
        {cartData.length == 0 ? EmptyCart() : cartItem()}
      </ScrollView>

    </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: colors.light,
  },
  emptyBoxWrapper: {
    paddingTop: 40,
  },
  emptyBox: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyTextContainer: {
    paddingTop: 20,
    paddingBottom: 35,
    alignItems: 'center',
  },
  emptyTitle: {
    color: colors.black,
    marginBottom: 10,
  },
  emptySubTitle: {
    textAlign: 'center',
  },
  cartItem: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  cartImg: {
    alignSelf: "flex-start",
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  cartDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexGrow: 1
  },
  cartTitle: {
    color: colors.black,
    marginTop: spacing[4],
    fontSize: 16,
    maxWidth: 200,
  },
  cartBottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: spacing[3]
  },
  cartBottomText: {
    flexDirection: "row",
    alignItems: 'center'
  },
  text: {
    color: colors.gray3,
    fontWeight: "600"
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.gray2,
    borderRadius: 50
  },
})
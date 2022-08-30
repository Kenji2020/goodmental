import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { Entypo,FontAwesome,MaterialCommunityIcons} from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

import { colors, spacing } from '../theme';
import Header from '../components/Header';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { addToCart } from '../redux/features/cartSlice';
import { removeWishList } from '../redux/features/wishlistSlice';
import Screen from '../components/Screen';

export default function WishList({ navigation }) {
  const WishListData = useSelector(state => state.wishlist.wishlistItems);
  const [success, setIsSuccess] = useState(false);
  const message = useSelector(state => state.cart.message)
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item))
    setIsSuccess(true)
    const timer = setTimeout(() => {
      setIsSuccess(false)
    }, 2000);
    return () => {
      clearTimeout(timer);
    }
  }

  function EmptyCart() {
    return (
      <View style={styles.emptyBoxWrapper}>
        <View style={styles.emptyBox}>
          <Image source={require('../assets/images/cart/empty-cart.png')} />
          <View style={styles.emptyTextContainer}>
            <AppText style={styles.emptyTitle} preset='h4'>Your WisList Item is Empty</AppText>
            <AppText style={styles.emptySubTitle}>
              {'Looks like you haven’t made \nyour order yet.'}
            </AppText>
          </View>

          <AppButton onPress={() => navigation.navigate("AllCourses")} title="Collect Course" />
        </View>
      </View>
    )
  }

  function wishList() {
    return (
      <View>
        <FlatList
          data={WishListData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.wishListWrapper}>
              <View style={styles.wishListItem}>
                <View style={{position:'relative'}}>
                  <Image
                    resizeMode="cover"
                    style={styles.wishListImg}
                    source={item.image}
                  />
                  <View style={{position:'absolute',top:30,width:50,height:25,backgroundColor:colors.red,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:colors.white,fontWeight:'700'}}>${item.price}</Text>
                  </View>
                </View>
                <View style={styles.wishListDetails}>
                  <View style={styles.wishlistContent}>
                    <AppText preset="h5"
                      style={styles.wishListTitle} >
                      {item.title}
                    </AppText>
                    <TouchableOpacity style={styles.iconBox}
                    onPress={()=> dispatch(removeWishList(item))}  >
                     <FontAwesome name="times" size={20} color={colors.red} />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.wishListBottomContent}>
                    <View style={styles.wishListBottomText}>
                      <Entypo name="dot-single" size={24}
                        color={colors.gray3} />
                      <AppText style={styles.text}>
                        {item.expert}
                      </AppText>
                    </View>
                    <TouchableOpacity onPress={() => handleAddToCart(item)}>
                      <View style={[styles.iconBox, { backgroundColor: colors.primary }]}>
                        <MaterialCommunityIcons name="shopping-outline" size={20} color={colors.white} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
  return (
    <>
    <Header title="Wish List" goBack={false} style={{backgroundColor:colors.light}} />
    <Screen style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30}}
        showsVerticalScrollIndicator={false}
      >
        {WishListData.length == 0 ? EmptyCart() : wishList()}
      </ScrollView>

      {
        success && message && <LottieView
          autoPlay
          loop={false}
          style={{ backgroundColor: colors.light }}
          source={require('../data/cart-success.json')}
          onAnimationFinish={()=> navigation.navigate("Cart")}
        />
      }
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
    paddingHorizontal: 20,
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
  wishListWrapper: {
    paddingHorizontal: 20
  },
  wishListItem: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  wishListImg: {
    alignSelf: "flex-start",
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  wishListDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexGrow: 1
  },
  wishListTitle: {
    color: colors.black,
    marginTop: spacing[4],
    fontSize: 16,
    maxWidth: 170,
  },
  wishListBottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: spacing[3]
  },
  wishListBottomText: {
    flexDirection: "row",
    alignItems: 'center'
  },
  text: {
    color: colors.gray3,
    fontWeight: "600"
  },
  wishlistContent: {
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
  }
})
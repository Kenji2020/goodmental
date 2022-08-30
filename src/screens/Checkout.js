import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view';

import Screen from '../components/Screen';
import Header from '../components/Header';
import { colors } from '../theme';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function Checkout({ navigation }) {
  const cartData = useSelector(state => state.cart.cartItems);
  let getTotal = cartData.reduce((prev, curr) => prev + curr?.price, 0)
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Checkout"
        onPress={() => navigation.goBack()}

      />
      <Screen style={{ flexGrow: 1, backgroundColor: colors.light }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <View style={{ padding: 20, borderWidth: 1, borderRadius: 5, borderColor: colors.light2, }}>
            <FlatList
              data={cartData}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginBottom: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <AppText preset='h4'>{item?.title.slice(0, 20)}...</AppText>
                      <AppText style={{color:colors.red}} preset='h4'>${item?.price}</AppText>

                    </View>
                  </View>
                )
              }}
            />
          </View>

          <View style={{ marginTop: 15,backgroundColor: colors.light,padding: 15,borderRadius: 5,borderWidth: 2,borderColor: colors.light2,marginBottom: 15,flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
            <AppText style={{color:colors.black}} preset='h4'>Total</AppText>
            <AppText style={{}} preset='h4'>${getTotal}</AppText>
          </View>

          <AppButton onPress={()=> navigation.navigate("PaymentMethod",{name:"checkout"})} title="Checkout Course" />
        </ScrollView>
      </Screen>
    </>
  )
}
import React from 'react';
import { View,StyleSheet } from 'react-native';

import { colors } from '../theme';
import Screen from '../components/Screen';
import LottieView from 'lottie-react-native';
import Header from '../components/Header';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function OrderDone({navigation}) {
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Order Done"
        onPress={() => navigation.goBack()}
      />
      <Screen style={styles.container}>
        <View style={styles.confirmationWrapper}>

        <LottieView
          autoPlay
          loop={false}
          style={{width:150,height:150}}
          source={require('../data/successfull.json')}
        />

          <View style={styles.textContainer}>
            <AppText preset="h3" style={styles.text}>{'Successfully! \nThank you for your Purchase!'}</AppText>
            <AppText style={styles.subtitle}>{'Your order will be delivered on time \nID #123456'}</AppText>
          </View>

          <AppButton onPress={() => navigation.navigate('WishList')}  title="View Wish LIst" />
        </View>
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.light,
      paddingTop: 35,
      paddingHorizontal: 20,
    },
    confirmationWrapper: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: colors.white,
      borderRadius: 5,
      alignItems:'center'
    },
    confirmationIcon: {
      alignSelf: "center",
    },
    textContainer: {
      marginBottom: 35,
    },
    text: {
      paddingTop: 35,
      marginBottom: 20,
      textAlign: "center",
      lineHeight: 28,
      color: colors.black,
      lineHeight:30,
    },
    subtitle: {
      textAlign: "center",
      lineHeight: 24,
    },
  });
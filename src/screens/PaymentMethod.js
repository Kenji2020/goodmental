import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import Screen from '../components/Screen';
import { colors } from '../theme';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Header from '../components/Header';

const PaymentMethod = ({navigation,route}) => {
  const params = route.params?.name;
  const [select, setIsSelect] = useState('first')
  return (
    <>
    <Header
        style={{ backgroundColor: colors.light }}
        title="Payment Method"
        onPress={params === "checkout" ?  () => navigation.goBack() : () => navigation.navigate("Profile") }
      />

    <Screen style={{ backgroundColor: colors.light }}>

      <View style={styles.paymentWrapper}>
        <View style={styles.paymentBox}>

          <TouchableOpacity onPress={() => setIsSelect('first')}>
            <View style={styles.paymentItem}>
              <View style={styles.paymentName}>
                <Image source={require('../assets/images/payment/visa.png')} />
                <AppText style={styles.paymentText} preset='h4'>Cradit Card</AppText>
              </View>
              <View>
                <RadioButton
                  value="first"
                  status={select === 'first' ? 'checked' : 'unchecked'}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => setIsSelect('second')}>
            <View style={styles.paymentItem}>
              <View style={styles.paymentName}>
                <Image source={require('../assets/images/payment/paypal.png')} />
                <AppText style={styles.paymentText} preset='h4'>Cradit Card</AppText>
              </View>
              <View>
                <RadioButton
                  value="first"
                  status={select === 'second' ? 'checked' : 'unchecked'}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsSelect('third')}>
            <View style={styles.paymentItem}>
              <View style={styles.paymentName}>
                <Image source={require('../assets/images/payment/discover.png')} />
                <AppText style={styles.paymentText} preset='h4'>Cradit Card</AppText>
              </View>
              <View>
                <RadioButton
                  value="first"
                  status={select === 'third' ? 'checked' : 'unchecked'}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => setIsSelect('fourth')}>
            <View style={styles.paymentItem}>
              <View style={styles.paymentName}>
                <Image source={require('../assets/images/payment/cirrus.png')} />
                <AppText style={styles.paymentText} preset='h4'>Cradit Card</AppText>
              </View>
              <View>
                <RadioButton
                  value="first"
                  status={select === 'fourth' ? 'checked' : 'unchecked'}
                />
              </View>
            </View>
          </TouchableOpacity>
          <AppButton onPress={() => navigation.navigate('PaymentInfo')} style={{marginTop:15}} title="Save Now" />
        </View>

      </View>
    </Screen>

    </>
  )
}

export default PaymentMethod;

const styles = StyleSheet.create({
  paymentWrapper: { paddingHorizontal: 20, paddingTop: 25 },
  paymentBox: {
    paddingHorizontal: 20, paddingVertical: 35,
    backgroundColor: colors.white, borderRadius: 5
  },
  paymentItem: { width: '100%', padding: 15, borderRadius: 5, borderWidth: 2, borderColor: colors.light, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom:10 },
  paymentName: { flexDirection: 'row', alignItems: 'center' },
  paymentText: { paddingLeft: 15, color: colors.black }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import Screen from '../components/Screen';
import { colors } from '../theme';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import { Platform } from 'react-native';

const PaymentMethod = ({navigation,route}) => {
  const params = route.params?.name;
  const [select, setIsSelect] = useState('first')
  return (
    <>
    <Header
        style={{ backgroundColor: colors.light }}
        title="Solicitar cuenta de psicólog@"
        onPress={params === "checkout" ?  () => navigation.goBack() : () => navigation.navigate("Profile") }
      />
    <Screen style={{ backgroundColor: colors.light }}>
      <AppText style={styles.userName}>Para obtener una cuenta de psicólog@ debe contactar con el siguiente correo presentando su curriculum y título:
        goodmental@gmail.com
        además de pagar una subscripcion de $5.000 pesos mensual
      </AppText>
    </Screen>

    </>
  )}
export default PaymentMethod;

const styles = StyleSheet.create({
  paymentWrapper: { paddingHorizontal: 20, paddingTop: 25 },
  paymentBox: {
    paddingHorizontal: 20, paddingVertical: 35,
    backgroundColor: colors.white, borderRadius: 5
  },
  paymentItem: { width: '100%', padding: 15, borderRadius: 5, borderWidth: 2, borderColor: colors.light, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom:10 },
  paymentName: { flexDirection: 'row', alignItems: 'center' },
  paymentText: { paddingLeft: 15, color: colors.black },
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
  userProfileBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  editImg: {
    position: 'relative',
    top: -20,
    left: 30
  },
  userName: {
    alignSelf: 'center',
    color: colors.black
  },
  userEmail: {
    alignSelf: 'center'
  },
  listItems: {
    paddingVertical: 35,
    marginRight:30,
    marginLeft: 30
  }})

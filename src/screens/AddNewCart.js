import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Header from '../components/Header'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import Pen from '../svg/Pen'
import { colors } from '../theme'

export default function AddNewCart({navigation}) {
  return (
    <>
    <Header
        style={{ backgroundColor: colors.light }}
        title="Add New Cart"
        onPress={() => navigation.goBack()}
      />

    <Screen style={{ backgroundColor: colors.light }}>

      <View style={styles.paymentWrapper}>
        <View style={styles.paymentBox}>
            
          <AppTextInput placeholderText="Account Holder Name" 
          icon={<View style={{marginRight:15}}><Pen/></View>} />

          <AppTextInput placeholderText="Card Number" icon={<Icon name="credit-card" iconColor={colors.gray} />} />
         
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

           <AppTextInput style={{flex:1,marginRight:10}} placeholderText="mm/yy" icon={<View style={{marginRight:15}}><Pen/></View>} />

           <AppTextInput style={{flex:1}} placeholderText="ccv" />
           
          </View>

          <AppButton onPress={()=> navigation.navigate('OrderDone')} style={{marginTop:15}} title="Save Now" />
        </View>

      </View>
    </Screen>

    </>
  )
}

const styles = StyleSheet.create({
  paymentWrapper: { 
    paddingHorizontal: 20, 
    paddingTop: 5 
  },
  paymentBox: {
    paddingHorizontal: 20, 
    paddingVertical: 35,
    backgroundColor: colors.white, 
    borderRadius: 5
  },
})
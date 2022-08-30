import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import Screen from '../components/Screen';
import Header from '../components/Header';
import { colors } from '../theme';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Pen } from '../svg';

export default function EditProfile({ navigation }) {
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light}}
        title="Edit Profile"
        onPress={() => navigation.navigate("Profile")}
      />

      <ScrollView style={styles.container}
      contentContainerStyle={{ paddingBottom: 30,paddingHorizontal:20 }}
      showsVerticalScrollIndicator={false}>
        <View style={styles.userProfileBox}>
          <Image source={require('../assets/images/user/user.png')} />

          <View style={styles.editInputConter}>
            <AppTextInput placeholderText="Alextina Dason" 
            penIcon={<Pen/>}  />
            <AppTextInput placeholderText="webmail@gmail.com" penIcon={<Pen/>} />
            <AppTextInput placeholderText="+453 597 349 998" penIcon={<Pen/>} />
            <AppTextInput placeholderText="Melbon, Australia" penIcon={<Pen/>} />
            <AppButton onPress={()=> navigation.navigate("Profile")} title="Save Changes" />
          </View>
        </View>

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.light,
  },
  userProfileBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 35,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width:'100%'
  },
  editInputConter:{
    width:'100%',
    paddingTop:35,
  }
})
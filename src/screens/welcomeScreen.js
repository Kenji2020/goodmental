import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { colors } from '../theme';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

export default function WelcomeScreen({ navigation }) {

  return (
    <>
    <Screen>
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <AppText preset="h2" style={styles.headingText}>Bienvenid@ a Goodmind </AppText>
          <AppText preset="default" style={styles.paragraphText}>{'La aplicación donde puedes contar\nlo que callas'}</AppText>
        </View>
        <AppButton title="Empezar"
          onPress={() => navigation.navigate('Login')} />
      </View>
    </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 65,
    alignSelf: 'center',
    width: 230,
    height: 60,
  },
  textContainer: {
    marginVertical: 80,
    alignItems: 'center'
  },
  headingText: {
    color: colors.black,
    marginBottom: 12,
  },
  paragraphText: {
    textAlign: 'center',
    lineHeight: 25.6
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  bgImg: {
    width: '100%',
    position:'absolute',
    bottom:0
  },
})
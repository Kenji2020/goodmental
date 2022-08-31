import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import { colors } from "../theme/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Header from "./../components/Header";
import AppText from "../components/AppText";
import {auth, sendPasswordResetEmail} from '../firebase/firebase'

export default function ForgotPassword({ navigation }) {
  const [text, setText] = useState('')
  const forgotPassword = (Email) => {

    console.log("reset email sent to " + Email);
    sendPasswordResetEmail(auth, Email, null)
        .then(() => {
            alert("Email enviado a " + Email + " revise carpeta de spam (es posible que el email esté en inglés).");
        })
        .catch(function (e) { 
            alert('Error, ingrese el email tal cual lo es e inténtelo nuevamente.');
        });
};
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Reinicio de contraseña"
        onPress={() => navigation.goBack()}
      />

      <Screen style={styles.container}>
        <View style={styles.passwordWrapper}>
          <AppText style={styles.text}>
            Por favor ingrese su correo electrónico
          </AppText>
          <AppTextInput placeholderText="Correo electrónico" onChangeText={(text)=>setText(text)} value={text}/>
          <AppButton
            onPress={() => {
              console.log(text.toLowerCase())
                forgotPassword(text.toLowerCase())
            }}
            title="Enviar"
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingTop: 85,
    paddingHorizontal: 20,
  },
  passwordWrapper: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  text: {
    lineHeight: 25,
    marginBottom: 30,
  },
});

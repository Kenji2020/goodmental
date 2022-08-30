import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import { colors } from "../theme/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Header from "./../components/Header";
import AppText from "../components/AppText";

export default function ForgotPassword({ navigation }) {
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Forgot Password"
        onPress={() => navigation.goBack()}
      />

      <Screen style={styles.container}>
        <View style={styles.passwordWrapper}>
          <AppText style={styles.text}>
            Please enter your email address. you will reveive a link to create a
            new password via email.
          </AppText>
          <AppTextInput placeholderText="Email Adress" />
          <AppButton
            onPress={() => navigation.navigate("ResetPassword")}
            title="Send"
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

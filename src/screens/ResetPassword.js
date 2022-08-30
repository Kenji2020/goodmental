import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import { colors } from "../theme/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Header from "./../components/Header";
import AppText from "../components/AppText";

export default function ResetPassword({ navigation }) {
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Reset Password"
        onPress={() => navigation.goBack()}
      />

      <Screen style={styles.container}>
        <View style={styles.resetPasswordWrapper}>
          <AppText style={styles.text}>
            Enter new password & confirm.
          </AppText>
          <AppTextInput placeholderText="New Password" />
          <AppTextInput placeholderText="Confirm Password" />
          <AppButton
            title="Confirm"
            onPress={() => navigation.navigate("ResetConfirmation")}
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
  resetPasswordWrapper: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  text: {
    lineHeight: 24,
    marginBottom: 30,
  },
});

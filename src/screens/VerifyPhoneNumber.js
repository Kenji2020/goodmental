import React from "react";
import { View, StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-input";

import Screen from "../components/Screen";
import { colors, typography } from "../theme";
import AppButton from "../components/AppButton";
import Header from "./../components/Header";
import AppText from './../components/AppText';

export default function VerifyPhoneNumber({ navigation }) {
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Verificar número de teléfono"
        onPress={() => navigation.goBack()}
      />

      <Screen style={styles.container}>
        <View style={styles.verifyNumberWrapper}>
          <AppText style={styles.text}>
              Te enviaremos un SMS
          </AppText>
          <View style={styles.phoneInputBox}>
            <PhoneInput
              style={{
                fontSize: 16,
                fontFamily: typography.regular
              }}
              placeholderTextColor={colors.black}
              initialCountry={"us"}
            />
          </View>
          <AppButton
            title="Confirm"
            onPress={() => navigation.navigate("ConfirmationCode")}
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
  verifyNumberWrapper: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  text: {
    lineHeight: 24,
    marginBottom: 35,
  },
  phoneInputBox: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 25,
    borderColor: colors.light,
    backgroundColor: colors.light2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

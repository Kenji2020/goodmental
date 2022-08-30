import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { colors, typography } from "../theme";
import Header from "./../components/Header";
import AppText from './../components/AppText';

export default function ConfirmationCode({ navigation }) {
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  return (
    <>
      <Header
        style={{ backgroundColor: colors.light }}
        title="Verify OTP"
        onPress={() => navigation.goBack()}
      />

      <Screen style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.confirmationWrapper}>
            <AppText style={styles.title}>Enter your OTP code here.</AppText>
            <View style={styles.otpCodeWrapper}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 1: text });
                    text && secondInput.current.focus();
                  }}
                />
              </View>

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 2: text });
                    text
                      ? thirdInput.current.focus()
                      : firstInput.current.focus();
                  }}
                />
              </View>

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 3: text });
                    text
                      ? fourthInput.current.focus()
                      : secondInput.current.focus();
                  }}
                />
              </View>

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 4: text });
                  }}
                />
              </View>
            </View>

            <View style={styles.subtitleContainer}>
              <AppText style={styles.subtitleText}>Didn’t receive the OTP?</AppText>
              <TouchableOpacity>
                <AppText preset="semibold" style={styles.resendLink}>Resend.</AppText>
              </TouchableOpacity>
            </View>

            <AppButton title="Verify" onPress={() => navigation.navigate("AccountConfirmation")} />
          </View>
        </KeyboardAwareScrollView>
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
  confirmationWrapper: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  title: {
    marginBottom: 30,
  },
  otpCodeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  inputBox: {
    borderRadius: 50,
    backgroundColor: colors.light2,
    borderWidth: 2,
    borderColor: colors.light,
  },
  textInput: {
    textAlign: "center",
    paddingHorizontal: 22,
    paddingVertical: 14.5,
    fontSize: 24,
    fontFamily: typography.regular,
    color: colors.primary,
    width: 60,
    borderRadius: 50,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  subtitleText: {
    lineHeight: 16 * 1.7,
  },
  resendLink: {
    color: colors.black,
    lineHeight: 16 * 1.7,
    marginLeft: 5,
  },
});

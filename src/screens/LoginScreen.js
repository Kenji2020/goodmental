import React, { useState } from "react";
import * as Yup from 'yup';
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from 'react-redux';

import { auth, signInWithEmailAndPassword } from '../firebase/firebase';
import { login } from '../redux/features/userSlice';
import Screen from "../components/Screen";
import Header from "../components/Header";
import AppText from "../components/AppText";
import AppForm from './../components/form/AppForm';
import AppFormField from './../components/form/AppFormField';
import SubmitButton from './../components/form/SubmitButton';
import { spacing, colors } from "../theme";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  return (
    <>
      <Header title="Iniciar sesión" onPress={() => navigation.goBack()} />

      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 25,
        }}
        showsHorizontalScrollIndicator={false}
      >

        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo/logo.png")} />
        </View>
        <View style={styles.formContainer}>

          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {

              const email = values.email;
              const password = values.password;

              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  dispatch(login({
                    displayName:user.displayName,
                    email: user.email,
                    uid: user.uid,
                  }))
                  navigation.navigate('VerifyPhoneNumber')
                })
                .catch((error) => {
                  const errorMessage = error.message;
                  alert(errorMessage)
                });

            }}
            validationSchema={validationSchema}
          >

            <AppFormField placeholderText="Correo electrónico" name="email" />
            <AppFormField placeholderText="Contraseña" name="password" secureTextEntry />

            <View style={styles.userCheckMeta}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <AppText style={styles.label}>Recordarme</AppText>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} >
                <AppText style={styles.forgotPass}>¿Olvidaste tu contraseña?</AppText>
              </TouchableOpacity>
            </View>
            <SubmitButton title="Iniciar sesión" style={{ marginTop: spacing[4] }} />
          </AppForm>
        </View>




        <View style={styles.signUpLinkContainer}>
          <View style={styles.signUpTextContainer}>
            <AppText>¿No tienes una cuenta?</AppText>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <AppText preset="bold" style={styles.link}>Regístrate</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 15,
    marginBottom: 50,
    alignItems: "center",
  },
  userCheckMeta: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  forgotPass: {
    textAlign: "right",
    color: colors.black
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    margin: 8,
    color: colors.black
  },
  loginBtn: {
    marginTop: 20,
  },
  signUpLinkContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: "row",
  },
  signUpTextContainer: {
    flexDirection: "row",
  },
  link: {
    marginLeft: 5,
    color: colors.primary,
  },
});

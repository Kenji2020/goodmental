import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from 'react-redux';
import * as Yup from "yup";

import { auth, createUserWithEmailAndPassword, updateProfile } from '../firebase/firebase';
import { login } from '../redux/features/userSlice';
import Screen from "../components/Screen";
import { colors } from "../theme";
import Header from "./../components/Header";
import AppForm from './../components/form/AppForm';
import AppFormField from './../components/form/AppFormField';
import SubmitButton from './../components/form/SubmitButton';
import AppText from './../components/AppText';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});



export default function RegisterScreen({ navigation }) {

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  let dispatch = useDispatch();

  const handleFormSubmit = values => {
    const name = values.name;
    const email = values.email;
    const password = values.password;


    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: name,
        }))
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {

        }).catch((error) => {

        });
        navigation.navigate('AccountConfirmation')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
  return (
    <>
      <Header title="Registro" onPress={() => navigation.goBack()} />

      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo/logo.png")} />
        </View>
        <View style={styles.formContainer}>
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}

            onSubmit={handleFormSubmit}
            validationSchema={validationSchema}
          >

            <AppFormField placeholderText="Nombre" name="name" />

            <AppFormField placeholderText="Correo electrónico" name="email" />

            <AppFormField placeholderText="Contraseña" name="password" secureTextEntry />

            <SubmitButton title="Registrarse" />

          </AppForm>
        </View>


        <View style={styles.signUpLinkContainer}>
          <View style={styles.signUpTextContainer}>
            <AppText preset="default">¿Ya tienes una cuenta?</AppText>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <AppText preset="bold" style={styles.link}>Inicia sesión</AppText>
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAwareScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 5,
    marginBottom: 50,
    alignItems: "center",
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

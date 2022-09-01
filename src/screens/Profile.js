import React from 'react';
import { View,StyleSheet,Image,TouchableOpacity,Alert } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; 

import Header from '../components/Header';
import { colors } from '../theme';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import { auth, signOut } from '../firebase/firebase';
import { Account,CreditCart,Heart,Logout} from '../svg';
import { isConfirmation, login, selectUser } from '../redux/features/userSlice';
import Screen from '../components/Screen';


export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSignOut = () => {

    Alert.alert(
      "¿Segur@ que quieres cerrar sesión?",
      "🔒",
      [
        {
          text: "Cancelar",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            signOut(auth).then(() => {
              dispatch(login())
              dispatch(isConfirmation(false))
            }).catch((error) => {
            });
          }
        }
      ]
    );
  }
  return (
    <>
    <Header title="Perfil" goBack={false} style={{backgroundColor:colors.light}} />
    <Screen style={styles.container}>
      <ScrollView >
        <View style={styles.userProfileBox}>
          {/*<Image source={require('../assets/images/user/user.png')} />*/}
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}>
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <AppText style={styles.userName} preset='h4'>{user?.displayName}</AppText>
            <AppText style={styles.userEmail}>{user?.email}</AppText>
          </View>
        </View>

        <View style={styles.listItems}>

          <ListItem onPress={()=> navigation.navigate('PaymentMethod')} icon={<CreditCart />} title="Solicitar cuenta de psicólog@" color="#F2277E" arrow={true}/>

          <ListItem onPress={()=> navigation.navigate('Search')} icon={<Ionicons name="document-text-outline" size={18} color={colors.white} />} title="Artículos" color="#3D3DCC" arrow={true} />

          <ListItem onPress={()=> navigation.navigate('WishList')} icon={<Heart />} title="Psicólog@s" color="#33ECE9" arrow={true} />

          <ListItem onPress={handleSignOut} icon={<Logout />} title="Cerrar sesión" color="#FFC226" arrow={true} />
        </View>
      </ScrollView>
    </Screen>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
  userProfileBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  editImg: {
    position: 'relative',
    top: -20,
    left: 30
  },
  userName: {
    alignSelf: 'center',
    color: colors.black
  },
  userEmail: {
    alignSelf: 'center'
  },
  listItems: {
    paddingVertical: 35,
    marginRight:10,
    marginLeft: 10
  }
})
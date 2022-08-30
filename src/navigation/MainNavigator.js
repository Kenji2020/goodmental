import React, { useEffect } from 'react';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigationTheme';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, selectUser } from '../redux/features/userSlice';
import { auth, onAuthStateChanged } from '../firebase/firebase';

const MainNavigator = () => {
  const user = useSelector(selectUser);
  const confirmation = useSelector(state => state.userInfo.confirmation)
  const dispatch = useDispatch();
    useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

    return (
    <NavigationContainer theme={navigationTheme}>
      {user && confirmation ? <AppNavigator/> : <AuthNavigator />}
    </NavigationContainer>
    )}

export default MainNavigator;
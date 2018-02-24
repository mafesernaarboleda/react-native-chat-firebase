/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import * as firebase from 'firebase';
import { LoginManager, AccessToken} from 'react-native-fbsdk';
import { AsyncStorage } from 'react-native';
import firebaseService from '../../services/firebase';

const FIREBASE_AUTH =  firebaseService.auth();
const PROVIDER_FACEBOOK = firebaseService.auth.FacebookAuthProvider;

export function sessionRestoring(){
    return {
        type: types.SESSION_RESTORING,
    };
};

export function signinRequest() {
    return {
      type: types.SIGNIN_REQUEST,
    };
}
  
export function signinRequestFail(error) {
    return {
      type: types.SIGNIN_REQUEST_FAIL,
      error,
    };
}
  
export function signinRequestSuccess(user) {
    return {
      type: types.SIGNIN_REQUEST_SUCCESS,
      user,
    };
}

export function signinFacebook() {
        return (dispatch) => {
            dispatch(signinRequest());
            return LoginManager.logInWithReadPermissions(['public_profile','email']).then(loginResult => {
              if (!loginResult.isCancelled){
                  AccessToken.getCurrentAccessToken().then(accessTokenData => {
                      const credential = PROVIDER_FACEBOOK.credential(accessTokenData.accessToken);
                      AsyncStorage.setItem('token', accessTokenData.accessToken);
                      return FIREBASE_AUTH.signInWithCredential(credential);
                  }).then(result => {
                      dispatch(signinRequestSuccess(result));
                  }).catch(err => {
                      dispatch(signinRequestFail(err));
                  });
               }
              }).catch(err => {
                  dispatch(signinRequestFail(err));
              });
          };
}

export function restoreSession() {
    return (dispatch) => {
      dispatch(sessionRestoring());
    return FIREBASE_AUTH
      .onAuthStateChanged(user => {
          if (user) {
            dispatch(signinRequestSuccess(user))
          } else {
            //dispatch(sessionLogout());
          }
        })
    }
}
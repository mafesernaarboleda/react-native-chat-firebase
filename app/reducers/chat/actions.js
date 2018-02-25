/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import firebaseService from '../../services/firebase';

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('messages');

export function messagesLoadRequest() {
  return {
    type: types.MESSAGES_LOAD_REQUEST,
  };
}

export function messagesLoadRequestFail(error) {
  return {
    type: types.MESSAGES_LOAD_REQUEST_FAIL,
    error,
  };
}

export function messagesLoadRequestSuccess(messages) {
  return {
    type: types.MESSAGES_LOAD_REQUEST_SUCCESS,
    messages,
  };
}

export function getChatItems(data){
  return data ? Object.keys(data).map(key => data[key]) : [];
}

export function loadMessages() {
  return (dispatch) => {
    dispatch(messagesLoadRequest());
    return FIREBASE_REF_MESSAGES.on('value', (snapshot) => {
        const messages = getChatItems(snapshot.val());
        dispatch(messagesLoadRequestSuccess(messages));
      }, (errorObject) => {
        dispatch(messagesLoadRequestFail(errorObject.message))
      });
  };
}

export function messagePutRequest() {
  return {
    type: types.MESSAGE_PUT_REQUEST,
  };
}

export function messagePutRequestFail(error) {
  return {
    type: types.MESSAGE_PUT_REQUEST_FAIL,
    error,
  };
}

export function messagePutRequestSuccess(text) {
  return {
    type: types.MESSAGE_PUT_REQUEST_SUCCESS,
    text,
  };
}

export function putMessage(message, currentUser) {
  let chatMessage = {
    text: message,
    createdAt: new Date().getTime(),
    user: {
      id: currentUser.uid,
      name: currentUser.displayName,
      photo: currentUser.photoURL,
      email: currentUser.email,
    }
  }
  return (dispatch) => {
    dispatch(messagePutRequest());
    return FIREBASE_REF_MESSAGES.push().set(chatMessage, (error) => {
      if (error) {
        dispatch(messagePutRequestFail(error.message));
      } else {
        dispatch(messagePutRequestSuccess(chatMessage));
      }
    });
  };
}

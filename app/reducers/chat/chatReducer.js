/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  apiError: '',
  message: '',
  messages: {},
  successloadMessages: false,
  successPutMessage: false,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case types.MESSAGES_LOAD_REQUEST:
    case types.MESSAGE_PUT_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.MESSAGES_LOAD_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        messages: {},
        successloadMessages: false,
      };
    case types.MESSAGES_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        messages: action.messages,
        successloadMessages: true,
      };
    case types.MESSAGE_PUT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        message: '',
        successPutMessage: false,
      };
    case types.MESSAGE_PUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        message: action.message,
        successPutMessage: true,
      };
    default:
      return state;
  }
};

export default chat;
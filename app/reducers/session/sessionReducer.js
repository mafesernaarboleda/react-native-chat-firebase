/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  restoring: false,
  apiError: '',
  user: {},
  successSignin: false,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_RESTORING:
    return{
      ...state,
      restoring: true
    };
    case types.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        restoring: false,
        apiError: '',
      };
    case types.SIGNIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        user: {},
        successSignin: false,
      };
    case types.SIGNIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        user: action.user,
        successSignin: true,
      };
    default:
      return state;
  }
};

export default session;

/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Login from './login';
import { signinFacebook, restoreSession } from './../../reducers/session/actions';

const mapStateToProps = (state) => ({
  ...state.session,
});

const mapDispatchToProps = (dispatch) => ({
  signinFacebook: () => {
    dispatch(signinFacebook());
  },
  restoreSession: () => {
    dispatch(restoreSession());
  }
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
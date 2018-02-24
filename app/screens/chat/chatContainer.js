
/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Chat from './chat';
import { loadMessages, putMessage } from './../../reducers/chat/actions';
import { signOut } from './../../reducers/session/actions';

const mapStateToProps = (state) => ({
  ...state.chat,
  ...state.session,
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => {
    dispatch(loadMessages());
  },
  putMessage: (message, user) => {
    dispatch(putMessage(message, user));
  },
  signOut: () => {
    dispatch(signOut());
  },
});

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatContainer;
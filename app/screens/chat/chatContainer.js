
/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Chat from './chat';
import { loadMessages, putMessage } from './../../reducers/chat/actions';

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
});

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatContainer;
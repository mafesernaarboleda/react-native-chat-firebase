
/**
 * @author Maria Fernanda Serna
 */

import { combineReducers } from 'redux';
import chat from './chat/chatReducer';
import session from './session/sessionReducer';

const rootReducer = combineReducers({ chat, session });

export default rootReducer;
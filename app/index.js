import {
  StackNavigator,
} from 'react-navigation';

import ChatContainer from './screens/chat';
import Login from './screens/login';

const App = StackNavigator({
  Login: {
    screen: Login,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Chat: {
    screen: ChatContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  }
});

export default App;

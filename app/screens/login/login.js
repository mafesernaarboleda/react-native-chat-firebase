/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './style';
import { Icon } from 'react-native-elements'

const background = require('./../../images/background.png');
const logo = require('./../../images/logo.png');

class Login extends Component {

  constructor(props) {
    super(props);
  }

componentDidMount() {
    const { restoreSession } = this.props;
    restoreSession();
}

componentWillReceiveProps(nextProps) {
    if (nextProps.successSignin) {
        this
        .props
        .navigation
        .navigate('Chat');
    }
}

  onSignIn(){
    const { signinFacebook } = this.props;
    signinFacebook();
  }

  render() {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.container} resizeMode="stretch">
                <View style={styles.viewLogo}>
                    <Image source={logo} />
                    <Text style={styles.textLogo}>
                        Chat Almundo                         
                    </Text>
                </View>
                <TouchableOpacity onPress={() => this.onSignIn()} style={styles.buttonFacebook}>
                        <Icon name='facebook-f' iconStyle={{marginTop: 15}} size={30} color='#EA5F4A' type='font-awesome'/> 
                        <Text style={styles.textFacebook}>
                            Sign In With Facebook
                        </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
  }
}


export default Login;
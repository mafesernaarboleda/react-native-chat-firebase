/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import { Icon } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './style';
import moment from 'moment';

const background = require('./../../images/background.png');
const logo = require('./../../images/logo.png');

class Chat extends Component {

  messages = [];

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: null
    };
  }

  componentWillMount() {
    const { loadMessages } = this.props;
    loadMessages();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successSignin) {
      this.setState({ user : nextProps.user});
    }
    if (nextProps.successloadMessages) {
      this.messages = nextProps.messages;
    }
    if (nextProps.successPutMessage) {
      this.setState({ message : ''});
    }
  }

onPutMessage(){
    const { putMessage } = this.props;
    putMessage(this.state.message, this.state.user);
}

onSignOut(){
  const { signOut } = this.props;
  signOut();
}

  getTime(time) {
    return moment(time).fromNow(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ImageBackground source={background} style={styles.header}  resizeMode="stretch">
          <Text style={styles.textTitle}>Messages</Text>
          <TouchableOpacity onPress={() => this.onSignOut()} style={styles.buttonSignOut}>
              <Icon name='ios-exit' type='ionicon' size={40} color='#fff'/> 
          </TouchableOpacity>
          </ImageBackground>   
        </View>  
        <ScrollView style={styles.fullScreen} ref={ref => this.scrollView = ref} onContentSizeChange={(contentWidth, contentHeight)=>{        
        this.scrollView.scrollToEnd({animated: true})}}>
          {this
            .messages
            .map((message, index) => {
                return (
                    <View style={styles.row} key={index}>
                      <Image source={{ uri:message.user.photo }} style={styles.photoUser}/>
                      <View style={styles.info}>        
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{message.user.name}</Text>
                        <Text>{message.text}</Text>
                        <View style={styles.time}>
                          <Icon name='av-timer' size={10} color='#777'/> 
                          <Text style={{ fontSize: 10, color: '#777', fontStyle: 'italic'}}>{this.getTime(message.createdAt)}</Text>
                        </View>
                      </View>
                    </View>
                );
            })}
        </ScrollView>
        <KeyboardAvoidingView  behavior="position" style={styles.keyBoardStule}>
              <View style={[styles.overlay, styles.bottomOverlay]}>
                <View style={{ borderBottomColor: '#EA5F4A', borderBottomWidth: 1 }}>
                  <TextInput
                    onChangeText={message => this.setState({ message })}
                    value={this.state.message}
                    style={styles.inputStyle}
                    underlineColorAndroid= {''}
                    placeholder="Enter message"
                    underlineColorAndroid="#EA5F4A"
                  />
                  </View>
                  <TouchableOpacity onPress={() => this.onPutMessage()}>
                    <Icon reverse name='paper-plane' type='font-awesome' color='#EA5F4A' />
                  </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
        </View>
    );
  }
}


export default Chat;
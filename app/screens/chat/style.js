/**
 * @author Maria Fernanda Serna
 */

import {
    StyleSheet,
    Dimensions,
    Platform,
  } from 'react-native';
import Style from './../../config/stylesheet';

const { width, height } = Dimensions.get('window');
const deviceWidth = Dimensions
  .get('window')
  .width;
const deviceHeight = Dimensions
  .get('window')
  .height;

const inputStyle = Platform.select({
  android: {
    alignItems: 'center',
    width: 270,
    color: '#000',
    justifyContent: 'center',
    fontSize: 13,
  },
  ios: {
      alignItems: 'center',
      width: 270,
      color: '#000',
      justifyContent: 'center',
      height: 30,
      fontSize: 13
  },
});

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        width, 
        flexDirection: 'column'
      },
      header: {
        backgroundColor: Style.ALMUNDO,
        height: 80,
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      fullScreen: {
        height,
        width: deviceWidth - 20,
        backgroundColor: '#FFFFFF',
        marginBottom: 80,
        marginTop: 20,
        flexDirection: 'column',
      },
      inputStyle,
      overlay: {
        position: 'absolute',
        padding: 16,
        right: 0,
        left: 0,
        alignItems: 'center',
      },
      bottomOverlay: {
        bottom: 0,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
      },
      keyBoardStule: {
        width,
        bottom: 0,
        flex: 1,
      },
      row: {
        flexDirection: 'row',
        margin: 10,
        width: deviceWidth - 80 * 2,
      },
      info: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        left: 10,
      },
      time: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 5,
      },
      buttonSignOut: {
        marginRight: 20,
      },
      textTitle:{ 
        marginLeft: 20, color: '#fff', fontSize: 20, fontWeight: 'bold',
      },
      photoUser: {
        height:50, 
        width: 50, 
        borderRadius:25, 
        borderWidth: 2
      }
});

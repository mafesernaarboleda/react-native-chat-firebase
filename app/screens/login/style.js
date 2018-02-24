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
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width, 
        flexDirection: 'column'
      },
      buttonFacebook: {
        height: 70,
        width: Style.CARD_WIDTH - 80,
        backgroundColor: '#fff',
        padding: 25,        
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 7,
        borderColor: '#fff',
      },
      textFacebook : {
        color: Style.ALMUNDO,
        fontSize: 20,
        fontWeight: 'bold',
      },
      viewLogo: {
        alignItems: 'center', 
        marginBottom: 50
      },
      textLogo: {
        color: '#fff', 
        fontSize: 50,
        fontWeight: 'bold'
      },
});

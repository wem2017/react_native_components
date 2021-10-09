import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';

export default function Icon(props) {
  const {style, type, enableRTL} = props;
  let Component;
  switch (type) {
    case 'AntDesign':
      Component = AntDesign;
      break;
    case 'Entypo':
      Component = Entypo;
      break;
    case 'EvilIcons':
      Component = EvilIcons;
      break;
    case 'Feather':
      Component = Feather;
      break;
    case 'FontAwesome':
      Component = FontAwesome;
      break;
    case 'FontAwesome5':
      Component = FontAwesome5;
      break;
    case 'FontAwesome5Pro':
      Component = FontAwesome5Pro;
      break;
    case 'Fontisto':
      Component = Fontisto;
      break;
    case 'Foundation':
      Component = Foundation;
      break;
    case 'Ionicons':
      Component = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      Component = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      Component = MaterialIcons;
      break;
    case 'Octicons':
      Component = Octicons;
      break;
    default:
      Component = MaterialCommunityIcons;
      break;
  }
  return (
    <Component
      style={StyleSheet.flatten([enableRTL && styles.styleRTL, style])}
      {...props}
    />
  );
}

Icon.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.oneOf([
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'FontAwesome5',
    'FontAwesome5Pro',
    'Fontisto',
    'Foundation',
    'Ionicons',
    'MaterialCommunityIcons',
    'MaterialIcons',
    'Octicons',
  ]),
  enableRTL: PropTypes.bool,
};

Icon.defaultProps = {
  style: {},
  name: 'help-circle-outline',
  size: 24,
  type: 'MaterialCommunityIcons',
  enableRTL: false,
};

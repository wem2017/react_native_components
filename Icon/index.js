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
import {useTheme} from '@configs';
import styles from './styles';

const Index = props => {
  const {theme} = useTheme();
  const {style, type, enableRTL} = props;
  let Icon;
  switch (type) {
    case 'AntDesign':
      Icon = AntDesign;
      break;
    case 'Entypo':
      Icon = Entypo;
      break;
    case 'EvilIcons':
      Icon = EvilIcons;
      break;
    case 'Feather':
      Icon = Feather;
      break;
    case 'FontAwesome':
      Icon = FontAwesome;
      break;
    case 'FontAwesome5':
      Icon = FontAwesome5;
      break;
    case 'FontAwesome5Pro':
      Icon = FontAwesome5Pro;
      break;
    case 'Fontisto':
      Icon = Fontisto;
      break;
    case 'Foundation':
      Icon = Foundation;
      break;
    case 'Ionicons':
      Icon = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      Icon = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      Icon = MaterialIcons;
      break;
    case 'Octicons':
      Icon = Octicons;
      break;
    default:
      Icon = MaterialCommunityIcons;
      break;
  }
  return (
    <Icon
      style={StyleSheet.flatten([enableRTL && styles.styleRTL, style])}
      color={theme.colors.text}
      {...props}
    />
  );
};

Index.propTypes = {
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

Index.defaultProps = {
  style: {},
  name: 'help-circle-outline',
  size: 24,
  type: 'MaterialCommunityIcons',
  enableRTL: false,
};

export default Index;

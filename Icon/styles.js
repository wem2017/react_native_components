import {StyleSheet, I18nManager} from 'react-native';

export default StyleSheet.create({
  styleRTL: {transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]},
});

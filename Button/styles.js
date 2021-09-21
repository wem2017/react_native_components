import {StyleSheet} from 'react-native';
import {Colors} from '@configs';

export default StyleSheet.create({
  default: {
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textDefault: {
    // color: Colors.white,
  },
  outline: {
    borderWidth: 1,
  },

  full: {
    width: '100%',
    alignSelf: 'auto',
  },
  round: {
    borderRadius: 28,
  },
  indicator: {paddingLeft: 5},
});

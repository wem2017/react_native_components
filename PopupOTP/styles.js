import {StyleSheet} from 'react-native';
import {Colors} from '@configs';

export default StyleSheet.create({
  container: {borderRadius: 12},
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 16,
  },
  iconContent: {position: 'absolute', top: -8, right: -8},
  closeIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
  },
});

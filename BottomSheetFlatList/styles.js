import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  indicatorContainer: {
    width: '100%',
    height: 4,
    position: 'absolute',
    top: -8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 64,
    height: '100%',
    borderRadius: 4,
  },
  container: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
});

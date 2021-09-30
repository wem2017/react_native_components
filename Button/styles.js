import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  large: {
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    minWidth: 128,
  },
  medium: {
    height: 36,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    minWidth: 80,
  },
  small: {
    height: 28,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    minWidth: 60,
  },
  leading: {
    marginRight: 8,
    width: 24,
    height: 24,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailing: {
    marginLeft: 8,
    width: 24,
    height: 24,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

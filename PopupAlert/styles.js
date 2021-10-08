import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rowActionText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textAction: {
    height: 36,
    paddingHorizontal: 4,
    minWidth: 60,
  },
  container: {borderRadius: 12},
  hiddenOverflow: {
    overflow: 'hidden',
  },
  iconImage: {
    height: 84,
    width: 84,
    borderRadius: 42,
    position: 'absolute',
    top: -42,
  },
  fullImage: {height: 164, width: '100%'},
});

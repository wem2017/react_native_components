import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  large: {
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
  },
  small: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
  },
  inputContent: {flex: 1},
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSmall: {fontSize: 16},
  rowInfo: {
    paddingLeft: 4,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  infoContent: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 8,
    top: -8,
    height: 16,
    paddingHorizontal: 8,
    overflow: 'hidden',
  },
  trailingContent: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

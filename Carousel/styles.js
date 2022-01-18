import {StyleSheet} from 'react-native';
import {Colors, Opacity} from '@configs';

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 12,
  },
  itemContent: {
    flex: 1,
  },
  actionContent: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    height: 24,
    backgroundColor: Colors.black + Opacity[25],
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContent: {
    position: 'absolute',
    bottom: 4,
    height: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContent: {width: 8},
  dotActiveStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: Colors.white,
  },
});

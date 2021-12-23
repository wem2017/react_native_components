import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listContainer: {
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  image: {height: '100%', width: 100},
  status: {
    position: 'absolute',
    left: 4,
    top: 4,
  },
  favorite: {position: 'absolute', bottom: 4, right: 4},
});

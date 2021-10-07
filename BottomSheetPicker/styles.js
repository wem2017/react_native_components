import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contentTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  textButton: {padding: 16},
  titleText: {
    flex: 1,
    textAlign: 'center',
  },
  searchContent: {paddingHorizontal: 16, paddingVertical: 8},
  item: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  icon: {width: 24, height: 24, marginRight: 8},
});

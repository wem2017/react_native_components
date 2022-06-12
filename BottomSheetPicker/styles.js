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
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  handle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
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
  empty: {width: 100, height: 100, marginBottom: 100},
});

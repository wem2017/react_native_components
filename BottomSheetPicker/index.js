import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Text, SearchInput, Icon, BottomSheetFlatList, Image} from '@components';
import {Styles, useTheme} from '@configs';
import styles from './styles';

const Index = forwardRef((props, ref) => {
  const {colors} = useTheme();
  const bottomSheetRef = useRef(null);
  useImperativeHandle(ref, () => bottomSheetRef.current);

  const [keyword, setKeyword] = useState();
  const [selected, setSelected] = useState();

  const {component, title, data, initHeight} = props;

  /**
   * on change search
   */
  const onSearch = value => {
    setKeyword(value);
  };

  /**
   * render item
   * @param {*} {item}
   * @return {*}
   */
  const renderItem = ({item}) => {
    let style = {};
    let trailing;
    if (item.value === selected?.value) {
      style = {
        backgroundColor: colors.primary + '1A',
      };
      trailing = <Icon name="check" size={24} color={colors.primary} />;
    }
    return (
      <TouchableOpacity
        style={[styles.item, style]}
        onPress={() => setSelected(item)}>
        {item.icon && (
          <Image
            style={styles.icon}
            source={{uri: item.icon}}
            resizeMode="contain"
          />
        )}
        <Text typography="h4" style={Styles.flex}>
          {item.title}
        </Text>
        {trailing}
      </TouchableOpacity>
    );
  };

  if (component === 'BottomSheetFlatList') {
    return (
      <BottomSheetFlatList
        ref={bottomSheetRef}
        initHeight={initHeight}
        contentContainerStyle={Styles.paddingVertical8}
        header={
          <>
            <View
              style={[styles.contentTitle, {borderBottomColor: colors.border}]}>
              <TouchableOpacity>
                <Text
                  typography="title"
                  weight="bold"
                  style={styles.textButton}>
                  Huỷ
                </Text>
              </TouchableOpacity>
              <Text typography="h4" weight="bold" style={styles.titleText}>
                {title}
              </Text>
              <TouchableOpacity>
                <Text
                  typography="title"
                  weight="bold"
                  color="primary"
                  style={styles.textButton}>
                  Lưu
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchContent}>
              <SearchInput
                type="bottomsheet"
                value={keyword}
                onChangeText={onSearch}
              />
            </View>
          </>
        }
        data={data}
        keyExtractor={item => item?.value}
        renderItem={renderItem}
      />
    );
  }
});

export default Index;

Index.propTypes = {
  component: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.array,
  initHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

Index.defaultProps = {
  component: 'BottomSheetFlatList',
  title: 'Chọn ngôn ngữ',
  data: [
    {
      value: 'VN',
      title: 'Việt Nam',
      icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/vn.png',
    },
    {
      value: 'AF',
      title: 'Afghanistan',
      icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/af.png',
    },
    {
      value: 'AL',
      title: 'Albania',
      icon: 'https://img.mservice.io/momo_app_v2/new_version/growth_activation/img/al.png',
    },
  ],
  initHeight: '50%',
  onCancel: () => {},
  onSave: item => {},
};

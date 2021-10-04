import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Text, Search} from '@components';
import styles from './styles';
import {Styles, useTheme} from '@configs';

export default function BottomSheetPicker(props) {
  const {colors} = useTheme();

  const [keyword, setKeyword] = useState();

  return (
    <View>
      <View style={[styles.contentTitle, {borderBottomColor: colors.border}]}>
        <TouchableOpacity>
          <Text typography="title" weight="bold" style={styles.textButton}>
            Huỷ
          </Text>
        </TouchableOpacity>
        <Text typography="h4" weight="bold" style={styles.titleText}>
          Chọn quốc tịch
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
      <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
        <Search
          value={keyword}
          onChangeText={value => {
            setKeyword(value);
          }}
        />
      </View>
      <View style={{height: 500}}></View>
    </View>
  );
}

BottomSheetPicker.propTypes = {};

BottomSheetPicker.defaultProps = {};

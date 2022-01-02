import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {SizedBox, Text} from '@components';
import {Styles, useTheme} from '@configs';
import styles from './styles';

export default function ListItem(props) {
  const {theme} = useTheme();
  const {style, size, icon, title, subtitle} = props;

  /**
   * export style for item
   * @return {*}
   */
  const styleBySize = () => {
    switch (size) {
      case 16:
        return styles.item16;
      case 24:
        return styles.item24;
      case 32:
        return styles.item32;
      case 36:
        return styles.item36;
      case 40:
        return styles.item40;

      default:
        return styles.item24;
    }
  };

  /**
   * export space icon and title
   * @return {*}
   */
  const spaceBySize = () => {
    switch (size) {
      case 16:
        return 8;
      case 24:
        return 8;

      default:
        return 12;
    }
  };

  /**
   * build subtitle
   * @return {*}
   */
  const buildSubTitle = () => {
    if (subtitle && size !== 16) {
      return (
        <Text typography="subtitle" type="secondary" style={styles.subTitle}>
          {subtitle}
        </Text>
      );
    }
  };

  const itemStyle = StyleSheet.flatten([
    styleBySize(),
    {backgroundColor: theme.colors.card},
    style,
  ]);

  return (
    <TouchableOpacity {...props} style={itemStyle}>
      {icon && (
        <View style={[Styles.row, {paddingRight: spaceBySize()}]}>
          <SizedBox width={size} height={size}>
            {icon}
          </SizedBox>
        </View>
      )}
      <View style={styles.contentTitle}>
        <Text
          typography="title"
          weight={size === 16 ? 'regular' : 'bold'}
          numberOfLines={1}>
          {title}
        </Text>
        {buildSubTitle()}
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  size: PropTypes.oneOf([16, 24, 32, 46, 40]),
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

ListItem.defaultProps = {
  size: 24,
  icon: null,
  title: 'Title',
  subtitle: null,
};

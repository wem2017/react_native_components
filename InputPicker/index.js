import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Text, Icon, SizedBox} from '@components';
import {useTheme} from '@configs';
import styles from './styles';

export default function InputPicker(props) {
  const {theme} = useTheme();
  const {
    style,
    size,
    label,
    info,
    value,
    placeholder,
    onPressInfo,
    error,
    trailing,
  } = props;

  /**
   * get border color
   */
  const getBorderColor = () => {
    if (error) {
      return theme.colors.error;
    }
    return theme.colors.border;
  };

  /**
   * get size style
   */
  const getSizeStyle = () => {
    switch (size) {
      case 'large':
        return styles.large;
      case 'small':
        return styles.small;

      default:
        return styles.large;
    }
  };

  /**
   * get text typography
   */
  const getTypography = () => {
    switch (size) {
      case 'large':
        return 'h3';
      case 'small':
        return 'h4';
      default:
        return 'h4';
    }
  };

  /**
   * get text weight
   */
  const getWeight = () => {
    switch (size) {
      case 'large':
        return 'bold';
      case 'small':
        return 'regular';
      default:
        return 'regular';
    }
  };

  /**
   * get size style
   */
  const getIconSizeStyle = () => {
    switch (size) {
      case 'large':
        return 24;
      case 'small':
        return 16;

      default:
        return 24;
    }
  };

  /**
   * build info icon button
   */
  const buildInfo = () => {
    if (info) {
      return (
        <TouchableOpacity style={styles.rowInfo} onPress={onPressInfo}>
          <Icon
            name="information-outline"
            color={theme.colors.secondary}
            size={16}
          />
        </TouchableOpacity>
      );
    }
  };

  /**
   * build trailing
   */
  const buildTrailing = () => {
    if (trailing) {
      return <View style={styles.trailingContent}>{trailing}</View>;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[getSizeStyle(), {borderColor: getBorderColor()}]}>
        <View style={styles.rowContent}>
          <Text typography={getTypography()} weight={getWeight()}>
            {value ?? placeholder}
          </Text>
          {buildTrailing()}
          <View
            style={[styles.infoContent, {backgroundColor: theme.colors.card}]}>
            <Text typography="subtitle" type="secondary">
              {label}
            </Text>
            {buildInfo()}
          </View>
        </View>
      </View>
      <SizedBox height={8} />
      <Text typography="subtitle" color="error">
        {error}
      </Text>
    </View>
  );
}

InputPicker.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.oneOf(['large', 'small']),
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.bool,
  onPressInfo: PropTypes.func,
  trailing: PropTypes.element,
};

InputPicker.defaultProps = {
  style: {},
  size: 'small',
  label: 'Label',
  value: null,
  placeholder: null,
  error: null,
  info: false,
  onPressInfo: () => {},
  trailing: null,
};

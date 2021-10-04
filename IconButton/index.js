import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from '@components';
import {useTheme, Colors} from '@configs';
import styles from './styles';

export default function IconButton(props) {
  const {colors} = useTheme();
  const {style, iconStyle, type, size, shape, name, source} = props;

  /**
   * export size style
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
   * export type style
   */
  const getTypeStyle = () => {
    switch (type) {
      case 'primary':
        return {backgroundColor: colors.primary};
      case 'secondary':
        return {
          backgroundColor: colors.card,
          borderWidth: 1,
          borderColor: colors.border,
        };
      case 'outline':
        return {
          backgroundColor: colors.card,
          borderWidth: 1,
          borderColor: colors.primary,
        };
      case 'disable':
        return {
          backgroundColor: colors.border,
        };
      case 'text':
        return {};

      default:
        return {backgroundColor: colors.primary};
    }
  };

  /**
   * export icon color
   */
  const getIconColor = () => {
    switch (type) {
      case 'primary':
        return Colors.white;
      case 'secondary':
        return colors.text;
      case 'outline':
        return colors.primary;
      case 'disable':
        return colors.textSecondary;
      default:
        return Colors.white;
    }
  };

  const buttonStyle = StyleSheet.flatten([
    getSizeStyle(),
    getTypeStyle(),
    shape === 'rectangle' && {borderRadius: 8},
    style,
  ]);

  return (
    <TouchableOpacity
      {...props}
      style={buttonStyle}
      disabled={type === 'disable'}>
      <Icon
        name={name ?? 'help-circle'}
        size={24}
        color={getIconColor()}
        type={source}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'disable']),
  size: PropTypes.oneOf(['large', 'small']),
  shape: PropTypes.oneOf(['circle', 'rectangle']),
  name: PropTypes.string,
  source: PropTypes.string,
};

IconButton.defaultProps = {
  style: {},
  iconStyle: {},
  type: 'primary',
  size: 'large',
  shape: 'circle',
  name: null,
  source: null,
};

import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '@configs';
import styles from './styles';

export default function IconButton(props) {
  const {theme} = useTheme();
  const {style, type, size, shape, children} = props;

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
        return {backgroundColor: theme.colors.primary};
      case 'secondary':
        return {};
      case 'outline':
        return {
          backgroundColor: theme.colors.card,
          borderWidth: 1,
          borderColor: theme.colors.primary,
        };
      case 'disable':
        return {
          backgroundColor: theme.colors.border,
        };

      default:
        return {backgroundColor: theme.colors.primary};
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
      {children}
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'disable']),
  size: PropTypes.oneOf(['large', 'small']),
  shape: PropTypes.oneOf(['circle', 'rectangle']),
  children: PropTypes.element.isRequired,
};

IconButton.defaultProps = {
  type: 'secondary',
  size: 'large',
  shape: 'circle',
  children: <View />,
};

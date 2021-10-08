import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {Styles, useTheme, Colors} from '@configs';
import PropTypes from 'prop-types';
import {Text} from '@components';
import styles from './styles';

export default function Button(props) {
  const {colors} = useTheme();
  const {
    style,
    textStyle,
    type,
    size,
    full,
    disabled,
    leading,
    trailing,
    loading,
    children,
  } = props;

  /**
   * export size style
   */
  const getSizeStyle = () => {
    switch (size) {
      case 'large':
        return styles.large;
      case 'medium':
        return styles.medium;
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
    if (disabled) {
      return {
        backgroundColor: colors.border,
      };
    }
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
      case 'text':
        return {};

      default:
        return {backgroundColor: colors.primary};
    }
  };

  /**
   * export loading color
   */
  const getLoadingColor = () => {
    if (disabled) {
      return colors.textSecondary;
    }
    switch (type) {
      case 'primary':
        return Colors.white;
      case 'secondary':
        return colors.text;
      case 'outline':
        return colors.primary;
      case 'text':
        return colors.primary;
      default:
        return colors.primary;
    }
  };

  /**
   * export icon size
   */
  const getIconSize = () => {
    switch (size) {
      case 'large':
        return 24;
      case 'medium':
      case 'small':
        return 16;

      default:
        return 24;
    }
  };

  /**
   * export typography style
   */
  const getTypography = () => {
    switch (size) {
      case 'large':
        return 'h4';
      case 'medium':
        return 'title';
      case 'small':
        return 'subtitle';

      default:
        return 'h4';
    }
  };

  /**
   * build Text
   */
  const buildText = () => {
    const typography = getTypography();
    if (disabled) {
      return (
        <Text
          typography={typography}
          weight="bold"
          type="secondary"
          numberOfLines={1}
          style={textStyle}>
          {children}
        </Text>
      );
    }
    switch (type) {
      case 'primary':
        return (
          <Text
            typography={typography}
            weight="bold"
            color="white"
            numberOfLines={1}
            style={textStyle}>
            {children}
          </Text>
        );
      case 'secondary':
        return (
          <Text
            typography={typography}
            weight="bold"
            numberOfLines={1}
            style={textStyle}>
            {children}
          </Text>
        );
      case 'outline':
        return (
          <Text
            typography={typography}
            weight="bold"
            color="primary"
            numberOfLines={1}
            style={textStyle}>
            {children}
          </Text>
        );
      case 'text':
        return (
          <Text
            typography={typography}
            type="secondary"
            weight="bold"
            numberOfLines={1}
            style={textStyle}>
            {children}
          </Text>
        );

      default:
        return (
          <Text
            typography={typography}
            weight="bold"
            numberOfLines={1}
            style={textStyle}>
            {children}
          </Text>
        );
    }
  };

  /**
   * build leading
   */
  const buildLeading = () => {
    if (leading) {
      const iconSize = getIconSize();
      return (
        <View style={[styles.leading, {width: iconSize, height: iconSize}]}>
          {leading}
        </View>
      );
    }
  };

  /**
   * build trailing
   */
  const buildTrailing = () => {
    if (loading) {
      return (
        <View style={styles.trailing}>
          <View style={Styles.flexCenter}>
            <ActivityIndicator color={getLoadingColor()} />
          </View>
        </View>
      );
    }
    if (trailing) {
      const iconSize = getIconSize();
      return (
        <View style={[styles.trailing, {width: iconSize, height: iconSize}]}>
          {trailing}
        </View>
      );
    }
  };

  const buttonStyle = StyleSheet.flatten([
    getSizeStyle(),
    getTypeStyle(),
    full && {width: '100%'},
    style,
  ]);

  return (
    <TouchableOpacity {...props} style={buttonStyle}>
      {buildLeading()}
      {buildText()}
      {buildTrailing()}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  leading: PropTypes.node,
  trailing: PropTypes.node,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string]),
};

Button.defaultProps = {
  style: {},
  textStyle: {},
  type: 'primary',
  size: 'large',
  full: true,
  disabled: false,
  leading: null,
  trailing: null,
  loading: false,
  children: 'Button',
};

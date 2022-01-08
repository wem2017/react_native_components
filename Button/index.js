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
  const {theme} = useTheme();
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
        backgroundColor: theme.colors.border,
      };
    }
    switch (type) {
      case 'primary':
        return {backgroundColor: theme.colors.primary};
      case 'secondary':
        return {
          backgroundColor: theme.colors.card,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
      case 'outline':
        return {
          backgroundColor: theme.colors.card,
          borderWidth: 1,
          borderColor: theme.colors.primary,
        };
      case 'text':
        return {};

      default:
        return {backgroundColor: theme.colors.primary};
    }
  };

  /**
   * export loading color
   */
  const getLoadingColor = () => {
    if (disabled) {
      return theme.colors.textSecondary;
    }
    switch (type) {
      case 'primary':
        return Colors.white;
      case 'secondary':
        return theme.colors.text;
      case 'outline':
        return theme.colors.primary;
      case 'text':
        return theme.colors.primary;
      default:
        return theme.colors.primary;
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
   * export icon size
   */
  const getIconSpace = () => {
    switch (size) {
      case 'large':
      case 'medium':
        return 8;
      case 'small':
        return 4;

      default:
        return 8;
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
      const marginRight = getIconSpace();
      return (
        <View
          style={[
            styles.leading,
            {width: iconSize, height: iconSize, marginRight},
          ]}>
          {leading}
        </View>
      );
    }
  };

  /**
   * build trailing
   */
  const buildTrailing = () => {
    const marginLeft = getIconSpace();
    if (loading) {
      return (
        <View style={[styles.trailing, {marginLeft}]}>
          <View style={Styles.flexCenter}>
            <ActivityIndicator color={getLoadingColor()} />
          </View>
        </View>
      );
    }
    if (trailing) {
      const iconSize = getIconSize();
      return (
        <View
          style={[
            styles.trailing,
            {width: iconSize, height: iconSize, marginLeft},
          ]}>
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
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  full: PropTypes.bool,
  disabled: PropTypes.bool,
  leading: PropTypes.element,
  trailing: PropTypes.element,
  loading: PropTypes.bool,
  children: PropTypes.string,
};

Button.defaultProps = {
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

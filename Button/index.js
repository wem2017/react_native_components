import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {useTheme, Colors} from '@configs';
import PropTypes from 'prop-types';
import {Text, SizedBox} from '@components';
import styles from './styles';

export default function Button(props) {
  const {colors} = useTheme();
  const {
    style,
    textStyle,
    type,
    size,
    full,
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
   * export loading color
   */
  const getLoadingColor = () => {
    switch (type) {
      case 'primary':
        return Colors.white;
      case 'secondary':
        return colors.text;
      case 'outline':
        return colors.primary;
      case 'disable':
        return colors.textSecondary;
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
   * render Text
   */
  const renderText = () => {
    const typography = getTypography();
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
      case 'disable':
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
   * render leading
   */
  const renderLeading = () => {
    if (leading) {
      const iconSize = getIconSize();
      return (
        <View style={styles.leading}>
          <SizedBox width={iconSize} height={iconSize}>
            <View style={styles.center}>{leading}</View>
          </SizedBox>
        </View>
      );
    }
  };

  /**
   * render trailing
   */
  const renderTrailing = () => {
    if (loading) {
      return (
        <View style={styles.trailing}>
          <View style={styles.center}>
            <ActivityIndicator color={getLoadingColor()} />
          </View>
        </View>
      );
    }
    if (trailing) {
      const iconSize = getIconSize();
      return (
        <View style={styles.trailing}>
          <SizedBox width={iconSize} height={iconSize}>
            <View style={styles.center}>{trailing}</View>
          </SizedBox>
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
    <TouchableOpacity
      {...props}
      style={buttonStyle}
      disabled={type === 'disable'}>
      {renderLeading()}
      {renderText()}
      {renderTrailing()}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text', 'disable']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  full: PropTypes.bool,
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
  leading: null,
  trailing: null,
  loading: false,
  children: 'Button',
};

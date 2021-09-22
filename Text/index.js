import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme, useFont, Colors} from '@configs';

export default function Index(props) {
  const {colors} = useTheme();
  const font = useFont();
  const {
    h1,
    h2,
    h3,
    h4,
    title,
    subtitle,
    caption,
    overline,
    thin,
    ultraLight,
    light,
    regular,
    medium,
    semibold,
    bold,
    heavy,
    black,
    primaryColor,
    primaryLightColor,
    primaryDarkColor,
    secondaryColor,
    secondaryLightColor,
    secondaryDarkColor,
    white,
    secondary,
    children,
    style,
  } = props;

  let textStyle = StyleSheet.flatten([
    {fontFamily: font, color: colors.text},
    h1 && Typography.h1,
    h2 && Typography.h2,
    h3 && Typography.h3,
    h4 && Typography.h4,
    title && Typography.title,
    subtitle && Typography.subtitle,
    caption && Typography.caption,
    overline && Typography.overline,
    thin && {fontWeight: FontWeight.thin},
    ultraLight && {fontWeight: FontWeight.ultraLight},
    light && {fontWeight: FontWeight.light},
    regular && {fontWeight: FontWeight.regular},
    medium && {fontWeight: FontWeight.medium},
    semibold && {fontWeight: FontWeight.semibold},
    bold && {fontWeight: FontWeight.bold},
    heavy && {fontWeight: FontWeight.heavy},
    black && {fontWeight: FontWeight.black},
    primaryColor && {color: colors.primary},
    primaryLightColor && {color: colors.primaryLight},
    primaryDarkColor && {color: colors.primaryDark},
    secondaryColor && {color: colors.secondary},
    secondaryLightColor && {color: colors.secondaryLight},
    secondaryDarkColor && {color: colors.secondaryDark},
    white && {color: Colors.white},
    secondary && {color: colors.textSecondary},
    style,
  ]);

  if (textStyle.fontFamily) {
    const fontWeight = textStyle.fontWeight ?? 'normal';
    switch (textStyle.fontFamily) {
      case 'Raleway':
        textStyle.fontFamily = `${textStyle.fontFamily}-${Raleway[fontWeight]}`;
        break;
      case 'SFProText':
        textStyle.fontFamily = `${textStyle.fontFamily}-${SFProText[fontWeight]}`;
        break;
      default:
        break;
    }
  }

  return (
    <Text {...props} style={textStyle}>
      {children ?? ''}
    </Text>
  );
}

// Define typechecking
Index.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  title: PropTypes.bool,
  subtitle: PropTypes.bool,
  caption: PropTypes.bool,
  overline: PropTypes.bool,
  thin: PropTypes.bool,
  ultraLight: PropTypes.bool,
  light: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
  black: PropTypes.bool,
  primaryColor: PropTypes.bool,
  primaryLightColor: PropTypes.bool,
  primaryDarkColor: PropTypes.bool,
  secondaryColor: PropTypes.bool,
  secondaryLightColor: PropTypes.bool,
  secondaryDarkColor: PropTypes.bool,
  white: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Index.defaultProps = {
  primaryColor: false,
  primaryLightColor: false,
  primaryDarkColor: false,
  secondaryColor: false,
  secondaryLightColor: false,
  secondaryDarkColor: false,
  white: false,
  secondary: false,
  children: '',
  style: {},
};

const Raleway = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
  normal: 'Regular',
  bold: 'Bold',
};
const SFProText = {
  100: 'Thin',
  200: 'Ultralight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semibold',
  700: 'Bold',
  800: 'Heavy',
  900: 'Black',
  normal: 'Regular',
  bold: 'Bold',
};

const FontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

const Typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    lineHeight: 38,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    lineHeight: 28,
  },
  h4: {
    fontSize: 16,
    lineHeight: 22,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
  },
  caption: {
    fontSize: 10,
    lineHeight: 14,
  },
  overline: {
    fontSize: 8,
    lineHeight: 12,
  },
});

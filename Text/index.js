import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme, useFont, Colors} from '@configs';

export default function Index(props) {
  const {colors} = useTheme();
  const font = useFont();
  const {typography, weight, type, color, children, style} = props;

  const getTypography = value => {
    switch (value) {
      case 'h1':
        return Typography.h1;
      case 'h2':
        return Typography.h2;
      case 'h3':
        return Typography.h3;
      case 'h4':
        return Typography.h4;
      case 'title':
        return Typography.title;
      case 'subtitle':
        return Typography.subtitle;
      case 'caption':
        return Typography.caption;
      case 'overline':
        return Typography.overline;
      default:
        return Typography.title;
    }
  };

  const getFontWeight = value => {
    switch (value) {
      case 'thin':
        return {fontWeight: FontWeight.thin};
      case 'ultraLight':
        return {fontWeight: FontWeight.ultraLight};
      case 'light':
        return {fontWeight: FontWeight.light};
      case 'regular':
        return {fontWeight: FontWeight.regular};
      case 'medium':
        return {fontWeight: FontWeight.medium};
      case 'semibold':
        return {fontWeight: FontWeight.semibold};
      case 'bold':
        return {fontWeight: FontWeight.bold};
      case 'heavy':
        return {fontWeight: FontWeight.heavy};
      case 'black':
        return {fontWeight: FontWeight.black};
      default:
        return {fontWeight: FontWeight.regular};
    }
  };

  const getType = value => {
    switch (value) {
      case 'primary':
        return {color: colors.text};
      case 'secondary':
        return {color: colors.textSecondary};
      default:
        return {color: colors.text};
    }
  };

  const getColor = value => {
    switch (value) {
      case 'primary':
        return {color: colors.primary};
      case 'secondary':
        return {color: colors.secondary};
      case 'white':
        return {color: Colors.white};
      case 'error':
        return {color: colors.error};
      case 'notification':
        return {color: colors.notification};
      default:
        return {};
    }
  };

  let textStyle = StyleSheet.flatten([
    {fontFamily: font},
    getType(type),
    getTypography(typography),
    getFontWeight(weight),
    getColor(color),
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
  typography: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'title',
    'subtitle',
    'caption',
    'overline',
  ]),
  weight: PropTypes.oneOf([
    'thin',
    'ultraLight',
    'light',
    'regular',
    'medium',
    'semibold',
    'bold',
    'heavy',
    'black',
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'white',
    'error',
    'notification',
    'none',
  ]),
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Index.defaultProps = {
  typography: 'title',
  weight: 'regular',
  type: 'primary',
  color: 'none',
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
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 16,
  },
  title: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
  },
  caption: {
    fontSize: 10,
  },
  overline: {
    fontSize: 8,
  },
});

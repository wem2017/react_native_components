import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Typography, FontWeight, BaseColor, useTheme, useFont} from '@config';

const Roboto = {
  100: 'Thin',
  200: 'Thin',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Medium',
  700: 'Bold',
  800: 'Bold',
  900: 'Black',
  normal: 'Regular',
  bold: 'Bold',
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

const Merriweather = {
  100: 'Light',
  200: 'Light',
  300: 'Light',
  400: 'Regular',
  500: 'Regular',
  600: 'Bold',
  700: 'Bold',
  800: 'Bold',
  900: 'Black',
  normal: 'Regular',
  bold: 'Bold',
};

export default function Index(props) {
  const {
    //props style
    header,
    title1,
    title2,
    title3,
    headline,
    body1,
    body2,
    callout,
    subhead,
    footnote,
    caption1,
    caption2,
    overline,
    // props font
    thin,
    ultraLight,
    light,
    regular,
    medium,
    semibold,
    bold,
    heavy,
    black,
    //custom color
    primaryColor,
    darkPrimaryColor,
    lightPrimaryColor,
    accentColor,
    grayColor,
    dividerColor,
    whiteColor,
    fieldColor,
    //numberOfLines
    numberOfLines,
    textAlign,
    //custom
    style,
    //children
    children,
  } = props;

  const {colors} = useTheme();
  const font = useFont();

  let textStyle = StyleSheet.flatten([
    {fontFamily: font, textAlign},
    header && Typography.header,
    title1 && Typography.title1,
    title2 && Typography.title2,
    title3 && Typography.title3,
    headline && Typography.headline,
    body1 && Typography.body1,
    body2 && Typography.body2,
    callout && Typography.callout,
    subhead && Typography.subhead,
    footnote && Typography.footnote,
    caption1 && Typography.caption1,
    caption2 && Typography.caption2,
    overline && Typography.overline,
    //custom for font
    thin && {fontWeight: FontWeight.thin},
    ultraLight && {fontWeight: FontWeight.ultraLight},
    light && {fontWeight: FontWeight.light},
    regular && {fontWeight: FontWeight.regular},
    medium && {fontWeight: FontWeight.medium},
    semibold && {fontWeight: FontWeight.semibold},
    bold && {fontWeight: FontWeight.bold},
    heavy && {fontWeight: FontWeight.heavy},
    black && {fontWeight: FontWeight.black},
    // default color
    {color: colors.text},
    //custom for color
    primaryColor && {color: colors.primary},
    darkPrimaryColor && {color: colors.primaryDark},
    lightPrimaryColor && {color: colors.primaryLight},
    accentColor && {color: colors.accent},
    grayColor && {color: BaseColor.grayColor},
    dividerColor && {color: BaseColor.dividerColor},
    whiteColor && {color: BaseColor.whiteColor},
    fieldColor && {color: BaseColor.fieldColor},
    style && style,
  ]);

  if (textStyle.fontFamily) {
    const fontStyle = textStyle.fontStyle == 'italic' ? 'Italic' : '';
    const fontWeight = textStyle.fontWeight ?? 400;
    switch (textStyle.fontFamily) {
      case 'Raleway':
        textStyle.fontFamily = `${textStyle.fontFamily}-${
          Raleway[fontWeight] == 'Regular'
            ? Raleway[fontWeight]
            : Raleway[fontWeight] + fontStyle
        }`;
        break;
      case 'Roboto':
        textStyle.fontFamily = `${textStyle.fontFamily}-${
          Roboto[fontWeight] == 'Regular'
            ? Roboto[fontWeight]
            : Roboto[fontWeight] + fontStyle
        }`;
        break;
      case 'Merriweather':
        textStyle.fontFamily = `${textStyle.fontFamily}-${
          Merriweather[fontWeight] == 'Regular'
            ? Merriweather[fontWeight]
            : Merriweather[fontWeight] + fontStyle
        }`;
        break;
      default:
        break;
    }
  }

  return (
    <Text style={textStyle} numberOfLines={numberOfLines}>
      {children ?? ''}
    </Text>
  );
}

// Define typechecking
Index.propTypes = {
  //define style
  header: PropTypes.bool,
  title1: PropTypes.bool,
  title2: PropTypes.bool,
  title3: PropTypes.bool,
  headline: PropTypes.bool,
  body1: PropTypes.bool,
  body2: PropTypes.bool,
  callout: PropTypes.bool,
  subhead: PropTypes.bool,
  footnote: PropTypes.bool,
  caption1: PropTypes.bool,
  caption2: PropTypes.bool,
  overline: PropTypes.bool,
  //define font custom
  thin: PropTypes.bool,
  ultraLight: PropTypes.bool,
  light: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
  black: PropTypes.bool,
  //custon for text color
  primaryColor: PropTypes.bool,
  darkPrimaryColor: PropTypes.bool,
  lightPrimaryColor: PropTypes.bool,
  accentColor: PropTypes.bool,
  grayColor: PropTypes.bool,
  dividerColor: PropTypes.bool,
  whiteColor: PropTypes.bool,
  fieldColor: PropTypes.bool,
  //numberOfLines
  numberOfLines: PropTypes.number,
  textAlign: PropTypes.string,
  //custom style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node, // plain text
};

Index.defaultProps = {
  //props for style
  header: false,
  title1: false,
  title2: false,
  title3: false,
  headline: false,
  body1: false,
  body2: false,
  callout: false,
  subhead: false,
  footnote: false,
  caption1: false,
  caption2: false,
  overline: false,
  //props for font
  thin: false,
  ultraLight: false,
  light: false,
  regular: false,
  medium: false,
  semibold: false,
  bold: false,
  heavy: false,
  black: false,
  //custon for text color
  primaryColor: false,
  darkPrimaryColor: false,
  lightPrimaryColor: false,
  accentColor: false,
  grayColor: false,
  dividerColor: false,
  whiteColor: false,
  fieldColor: false,
  //numberOfLines
  numberOfLines: 10,
  textAlign: 'left',
  //custom style
  style: {},
  children: '',
};

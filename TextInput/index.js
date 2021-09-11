import React from 'react';
import {TextInput, View, I18nManager} from 'react-native';
import PropTypes from 'prop-types';
import {BaseStyle, BaseColor, useTheme, useFont} from '@config';

export default function Index(props) {
  const {colors} = useTheme();
  const font = useFont();
  const cardColor = colors.card;
  const {style, success, icon} = props;
  return (
    <View style={[BaseStyle.textInput, {backgroundColor: cardColor}, style]}>
      <TextInput
        {...props}
        style={{
          fontFamily: font,
          flex: 1,
          height: '100%',
          textAlign: I18nManager.isRTL ? 'right' : 'left',
          color: colors.text,
          paddingTop: 5,
          paddingBottom: 5,
        }}
        placeholderTextColor={success ? BaseColor.grayColor : colors.primary}
        selectionColor={colors.primary}
      />
      {icon}
    </View>
  );
}

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  success: PropTypes.bool,
  icon: PropTypes.node,
};

Index.defaultProps = {
  style: {},
  success: true,
  icon: null,
};

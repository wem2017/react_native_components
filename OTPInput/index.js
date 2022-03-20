import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {View, I18nManager} from 'react-native';
import PropTypes from 'prop-types';
import OtpInputs from 'react-native-otp-inputs';
import {getFontFamily, Text} from '@components';
import {useTheme} from '@configs';
import styles from './styles';

const Index = forwardRef((props, ref) => {
  const otpRef = useRef();
  const {theme, font} = useTheme();
  const {style, error} = props;

  useImperativeHandle(ref, () => otpRef.current);

  return (
    <View style={[styles.container, style]}>
      <OtpInputs
        ref={otpRef}
        {...props}
        style={styles.otpContainer}
        isRTL={I18nManager.isRTL}
        inputContainerStyles={[
          styles.cellOtpContainer,
          {borderColor: theme.colors.border},
          error && {borderColor: theme.colors.primary},
        ]}
        focusStyles={{
          borderColor: theme.colors.primary,
        }}
        inputStyles={[
          styles.cellTextInput,
          {
            color: theme.colors.text,
            fontFamily: getFontFamily({
              fontFamily: font,
              fontWeight: 'bold',
            }),
          },
        ]}
      />
      <Text typography="subtitle" color="error">
        {error}
      </Text>
    </View>
  );
});

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
};

Index.defaultProps = {
  style: {},
  error: null,
};

export default Index;

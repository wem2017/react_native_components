import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {View, I18nManager} from 'react-native';
import PropTypes from 'prop-types';
import OtpInputs from 'react-native-otp-inputs';
import {getFontFamily, Text} from '@components';
import {useTheme, useFont} from '@configs';
import styles from './styles';

const OTPInput = forwardRef((props, ref) => {
  const otpRef = useRef();
  const {colors} = useTheme();
  const font = useFont();
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
          {borderColor: colors.border},
          error && {borderColor: colors.primary},
        ]}
        focusStyles={{
          borderColor: colors.primary,
        }}
        inputStyles={[
          styles.cellTextInput,
          {
            color: colors.text,
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

export default OTPInput;

OTPInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
};

OTPInput.defaultProps = {
  style: {},
  error: null,
};

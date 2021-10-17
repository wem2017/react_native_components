import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Text, OTPInput, Icon} from '@components';
import {Styles, useTheme, Colors} from '@configs';
import Navigator from '@navigator';
import styles from './styles';

export default function PopupOTP(props) {
  const {theme} = useTheme();
  const otpRef = useRef();

  const [error, setError] = useState();
  const [time, setTime] = useState(props.time);

  const {title, length, onOTPCheck, onClose} = props;

  useEffect(() => {
    setTimeout(() => {
      focusOTP();
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  /**
   * focus OTP
   */
  const focusOTP = () => {
    setError(null);
    otpRef.current.focus();
  };

  /**
   * on change otp
   * @param {*} value
   */
  const handleChange = useCallback(
    async value => {
      if (value.length === length) {
        const issue = await onOTPCheck(value);
        if (issue) {
          setError(issue);
        } else {
          Navigator.pop();
        }
      }
    },
    [length, onOTPCheck],
  );

  /**
   * resend otp
   */
  const onResendOTP = () => {
    props.onResendOTP();
    setTime(props.time);
  };

  /**
   * build resend otp
   * @return {*}
   */
  const buildSendOTP = () => {
    if (time > 0) {
      return (
        <Text typography="title" type="secondary">
          Gửi lại OTP sau ({time})
        </Text>
      );
    }
    return (
      <TouchableOpacity onPress={onResendOTP}>
        <Text typography="title" color="secondary">
          Gửi lại OTP
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
        },
      ]}>
      <View style={Styles.padding24}>
        <Text typography="h4" weight="bold">
          {title}
        </Text>
        <View style={styles.otpContainer}>
          <OTPInput
            ref={otpRef}
            handleChange={handleChange}
            numberOfInputs={length}
            selectTextOnFocus={true}
            error={error}
          />
        </View>
        <View style={Styles.rowCenter}>{buildSendOTP()}</View>
      </View>
      <TouchableOpacity
        style={styles.iconContent}
        onPress={() => {
          Navigator.pop();
          onClose();
        }}>
        <View style={styles.closeIcon}>
          <Icon name="close-circle" color={Colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

PopupOTP.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number,
  length: PropTypes.number,
  onOTPCheck: PropTypes.func,
  onResendOTP: PropTypes.func,
  onClose: PropTypes.func,
};

PopupOTP.defaultProps = {
  title: 'Tiêu đề',
  time: 60,
  length: 4,
  onOTPCheck: () => false,
  onResendOTP: () => {},
  onClose: () => {},
};

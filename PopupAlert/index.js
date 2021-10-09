import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Button, Image, SizedBox, Text} from '@components';
import {Styles, useTheme} from '@configs';
import Navigator from '@navigator';
import styles from './styles';

export default function PopupAlert(props) {
  const {colors} = useTheme();
  const {
    image,
    title,
    message,
    primaryButton,
    secondaryButton,
    imageType,
    buttonType,
  } = props;

  /**
   * onPress primary button
   */
  const onPressPrimaryAction = () => {
    Navigator.pop();
    primaryButton.onPress?.();
  };

  /**
   * onPress secondary button
   */
  const onPressSecondaryAction = () => {
    Navigator.pop();
    secondaryButton.onPress?.();
  };

  /**
   * build banner image
   *
   * @return {*}
   */
  const buildImage = () => {
    if (imageType === 'icon') {
      return (
        <View style={[Styles.flexCenter, Styles.padding16]}>
          <Image source={image} style={styles.iconImage} />
        </View>
      );
    }
    return <Image source={image} style={styles.fullImage} />;
  };
  /**
   * build secondary button
   * @return {*}
   */
  const buildSecondaryButton = () => {
    if (secondaryButton) {
      if (buttonType === 'text') {
        return (
          <>
            <Button
              type="text"
              full={false}
              onPress={onPressSecondaryAction}
              style={styles.textAction}>
              {secondaryButton.title}
            </Button>
            <View style={styles.space24} />
          </>
        );
      }
      return (
        <>
          <Button
            style={Styles.flex}
            type="secondary"
            onPress={onPressSecondaryAction}>
            {secondaryButton.title}
          </Button>
          <View style={styles.space16} />
        </>
      );
    }
  };

  /**
   * build action button
   * @return {*}
   */
  const buildAction = () => {
    if (buttonType === 'text') {
      return (
        <View style={styles.rowActionText}>
          {buildSecondaryButton()}
          <Button
            onPress={onPressPrimaryAction}
            type="text"
            full={false}
            style={styles.textAction}
            textStyle={{color: colors.primary}}>
            {primaryButton.title}
          </Button>
        </View>
      );
    }
    return (
      <View style={Styles.rowCenter}>
        {buildSecondaryButton()}
        <Button style={Styles.flex} onPress={onPressPrimaryAction}>
          {primaryButton.title}
        </Button>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
        },
        imageType === 'full' && styles.hiddenOverflow,
      ]}>
      {image && buildImage()}
      <View style={Styles.padding24}>
        <Text typography="h4" weight="bold">
          {title}
        </Text>
        <Text typography="h4" style={Styles.paddingVertical24}>
          {message}
        </Text>
        {buildAction()}
      </View>
    </View>
  );
}

PopupAlert.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  message: PropTypes.string,
  primaryButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  }).isRequired,
  secondaryButton: PropTypes.shape({
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  }),
  imageType: PropTypes.oneOf(['full', 'icon']),
  buttonType: PropTypes.oneOf(['primary', 'text']),
};

PopupAlert.defaultProps = {
  image: null,
  title: 'Tiêu đề',
  message: 'Đây là nội dung cho văn bản, bạn có thể thay đổi nhiều thông điệp',
  primaryButton: {
    title: 'Button ',
    onPress: () => {},
  },
  secondaryButton: null,
  imageType: 'full',
  buttonType: 'primary',
};

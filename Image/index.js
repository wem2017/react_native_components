import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PlaceholderMedia, Fade} from 'rn-placeholder';
import {Icon, Text} from '@components';
import {Styles, useTheme} from '@configs';
import styles from './styles';
export default function Image(props) {
  const {theme} = useTheme();
  const {style, resizeMode, placeholder, error} = props;
  const [loading, setLoading] = useState(true);
  const [fail, setFail] = useState(false);

  const buildContent = () => {
    if (loading || fail) {
      let content = placeholder ?? (
        <PlaceholderMedia style={styles.image} Animation={Fade} />
      );
      if (fail) {
        content = error ?? (
          <View
            style={[Styles.flexCenter, {backgroundColor: theme.colors.border}]}>
            <Icon name="error-outline" type="MaterialIcons" />
            <Text typography="subtitle" type="secondary">
              Can't load image
            </Text>
          </View>
        );
      }
      return <View style={styles.placeholder}>{content}</View>;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <FastImage
        {...props}
        style={styles.image}
        resizeMode={FastImage.resizeMode[resizeMode]}
        onLoad={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => setFail(true)}
      />
      {buildContent()}
    </View>
  );
}

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resizeMode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'center']),
  placeholder: PropTypes.element,
  error: PropTypes.element,
};

Image.defaultProps = {
  style: {},
  resizeMode: 'cover',
  placeholder: null,
  error: null,
};

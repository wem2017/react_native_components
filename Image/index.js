import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PlaceholderMedia, Fade} from 'rn-placeholder';
import styles from './styles';
export default function Image(props) {
  const {style, resizeMode} = props;
  const [loading, setLoading] = useState(false);

  const buildLoading = () => {
    if (loading) {
      return (
        <View Animation={Fade} style={styles.placeholder}>
          <PlaceholderMedia style={styles.image} />
        </View>
      );
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
      />
      {buildLoading()}
    </View>
  );
}

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  resizeMode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'center']),
  placeholder: PropTypes.bool,
};

Image.defaultProps = {
  style: {},
  resizeMode: 'cover',
  placeholder: true,
};

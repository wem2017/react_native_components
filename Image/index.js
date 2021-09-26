import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Placeholder, PlaceholderMedia, Fade} from 'rn-placeholder';
import styles from './styles';
export default function Image(props) {
  const {style, resizeMode} = props;
  const [loading, setLoading] = useState(false);

  const renderLoading = () => {
    if (loading) {
      return (
        <Placeholder Animation={Fade} style={[styles.loading, style]}>
          <PlaceholderMedia style={style} />
        </Placeholder>
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
      {renderLoading()}
    </View>
  );
}

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  source: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      uri: PropTypes.string,
      cache: PropTypes.oneOf(['immutable', 'web', 'cacheOnly']),
      priority: PropTypes.oneOf(['low', 'normal', 'high']),
      headers: PropTypes.object,
    }),
  ]),
  resizeMode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'center']),
  placeholder: PropTypes.bool,
};

Image.defaultProps = {
  style: {},
  source: {},
  resizeMode: 'cover',
  placeholder: true,
};

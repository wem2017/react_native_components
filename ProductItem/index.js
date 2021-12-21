import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Icon, Image, SizedBox, Text} from '@components';
import {useTheme, Images} from '@configs';
import styles from './styles';

export default function ProductItem(props) {
  const {theme} = useTheme();
  const {style, item, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.listContainer, style]}>
      <Image
        style={{height: '100%', width: 120}}
        source={item.image}
        resizeMode="cover"
      />
      <SizedBox width={8} />
      <View style={{paddingVertical: 4}}>
        <Text>dasdsa</Text>
      </View>
    </TouchableOpacity>
  );
}

ProductItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    rate: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }),
  onPress: PropTypes.func,
};

ProductItem.defaultProps = {
  style: {},
  item: {},
  onPress: () => {},
};

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Icon, Image, SizedBox, Text} from '@components';
import {useTheme, Styles} from '@configs';
import {getCurrency} from '@utils';
import styles from './styles';

export default function ProductItem(props) {
  const {theme} = useTheme();
  const {style, item, onPress} = props;

  /**
   * build status
   *
   */
  const buildStatus = status => {
    if (status) {
      return <View style={styles.status}></View>;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.listContainer, style]}>
      <View style={styles.image}>
        <Image style={Styles.flex} source={item.image} resizeMode="cover" />
        {buildStatus()}
      </View>
      <SizedBox width={8} />
      <View style={[Styles.paddingVertical4, Styles.flex]}>
        <Text typography="caption" type="secondary">
          {item.subtitle}
        </Text>
        <SizedBox height={4} />
        <Text typography="title" weight="medium">
          {item.title}
        </Text>
        <SizedBox height={4} />
        <Text typography="title" weight="medium">
          {getCurrency(item.price)}
        </Text>
        <TouchableOpacity style={styles.favorite}>
          <Icon
            name={item.favorite ? 'heart' : 'heart-outline'}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
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

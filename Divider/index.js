import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '@configs';

export default function Divider(props) {
  const {colors} = useTheme();
  const {color, thickness} = props;
  return (
    <View
      style={[
        styles.default,
        {
          backgroundColor: color ?? colors.border,
          height: thickness,
        },
      ]}
    />
  );
}

Divider.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
};

Divider.defaultProps = {
  color: null,
  thickness: 1,
};

const styles = StyleSheet.create({
  default: {
    width: '100%',
  },
});

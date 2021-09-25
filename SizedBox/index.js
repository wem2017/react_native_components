import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default function SizedBox(props) {
  const {width, height, children} = props;
  return <View style={[styles.default, {width, height}]}>{children}</View>;
}

SizedBox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
};

SizedBox.defaultProps = {
  width: 0,
  height: 0,
  children: null,
};

const styles = StyleSheet.create({
  default: {
    overflow: 'hidden',
  },
});

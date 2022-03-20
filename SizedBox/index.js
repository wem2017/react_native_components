import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Index = props => {
  const {width, height, children} = props;
  return <View style={[styles.default, {width, height}]}>{children}</View>;
};

Index.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.element,
};

Index.defaultProps = {
  width: 0,
  height: 0,
  children: null,
};

export default Index;

import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '@configs';
import styles from './styles';

const Index = props => {
  const {theme} = useTheme();
  const {color, thickness} = props;
  return (
    <View
      style={[
        styles.default,
        {
          backgroundColor: color ?? theme.colors.border,
          height: thickness,
        },
      ]}
    />
  );
};

Index.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.number,
};

Index.defaultProps = {
  color: null,
  thickness: 1,
};

export default Index;

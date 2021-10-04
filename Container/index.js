import React from 'react';
import {Platform, KeyboardAvoidingView} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import {Styles} from '@configs';

export default function Container(props) {
  const headerHeight = useHeaderHeight();
  const {style, children} = props;
  return (
    <SafeAreaView style={[Styles.flex, style]} edges={['bottom']}>
      <KeyboardAvoidingView
        style={Styles.flex}
        keyboardVerticalOffset={headerHeight}
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

Container.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};

Container.defaultProps = {
  styles: {},
  children: null,
};

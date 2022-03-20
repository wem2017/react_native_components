import React from 'react';
import {Platform, KeyboardAvoidingView} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import {Styles} from '@configs';

const Index = props => {
  const headerHeight = useHeaderHeight();
  const {style, children, edges} = props;
  return (
    <SafeAreaView style={[Styles.flex, style]} edges={edges}>
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
};

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
  edges: PropTypes.array,
};

Index.defaultProps = {
  styles: {},
  children: null,
  edges: ['bottom'],
};

export default Index;

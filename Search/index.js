import React, {useImperativeHandle, useState, useRef, forwardRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme, useFont, Styles} from '@configs';
import {Icon, getFontFamily} from '@components';
import styles from './styles';

const Index = forwardRef((props, ref) => {
  const {colors} = useTheme();
  const font = useFont();
  const inputRef = useRef();
  const [focus, setFocus] = useState(false);

  useImperativeHandle(ref, () => inputRef.current);

  const {value, placeholder, style} = props;

  /**
   * get border color
   */
  const getBorderColor = () => {
    if (focus) {
      return colors.primaryLight;
    }
    return colors.background;
  };

  /**
   * get background color
   */
  const getBackgroundColor = () => {
    if (focus) {
      return colors.card;
    }
    return colors.background;
  };

  /**
   * on clear text
   */
  const onClear = () => {
    inputRef?.current?.clear?.();
    props.onChangeText?.('');
  };

  /**
   * on blur
   */
  const onBlur = () => {
    setFocus(false);
    props.onBlur?.();
  };

  /**
   * on forcus
   */
  const onFocus = () => {
    setFocus(true);
    props.onFocus?.();
  };

  /**
   * render clear action
   */
  const renderClear = () => {
    if (value) {
      return (
        <TouchableOpacity onPress={onClear}>
          <Icon
            name="close-circle-outline"
            color={colors.text}
            size={20}
            style={Styles.paddingHorizontal8}
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
        },
        style,
      ]}>
      <Icon
        size={24}
        color={colors.textSecondary}
        name="magnify"
        style={styles.searchIcon}
      />
      <TextInput
        {...props}
        ref={inputRef}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[
          styles.input,
          {
            color: colors.text,
            fontFamily: getFontFamily({
              fontFamily: font,
            }),
          },
        ]}
        placeholderTextColor={colors.textSecondary}
      />
      {renderClear()}
    </View>
  );
});

export default Index;

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Index.defaultProps = {
  style: {},
  value: '',
  placeholder: 'Search...',
};

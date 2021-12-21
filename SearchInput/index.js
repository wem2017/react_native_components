import React, {useImperativeHandle, useState, useRef, forwardRef} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {useTheme, Styles} from '@configs';
import {Icon, getFontFamily} from '@components';
import styles from './styles';

const Index = forwardRef((props, ref) => {
  const {theme, font} = useTheme();
  const inputRef = useRef();
  const [focus, setFocus] = useState(false);

  useImperativeHandle(ref, () => inputRef.current);

  const {type, value, placeholder, style} = props;

  /**
   * get border color
   */
  const getBorderColor = () => {
    if (focus) {
      return theme.colors.primaryLight;
    }
    return theme.colors.background;
  };

  /**
   * get background color
   */
  const getBackgroundColor = () => {
    if (focus) {
      return theme.colors.card;
    }
    return theme.colors.background;
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
   * build clear action
   */
  const buildClear = () => {
    if (value) {
      return (
        <TouchableOpacity onPress={onClear}>
          <Icon
            name="close-circle-outline"
            size={20}
            style={Styles.paddingHorizontal8}
          />
        </TouchableOpacity>
      );
    }
  };

  /**
   * build input type
   * you need use Input of package @gorhom/bottom-sheet for bottom sheet iput
   * @return {*}
   */
  const buildInputType = () => {
    switch (type) {
      case 'bottomsheet':
        return (
          <BottomSheetTextInput
            {...props}
            ref={inputRef}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            style={[
              styles.input,
              {
                color: theme.colors.text,
                fontFamily: getFontFamily({
                  fontFamily: font,
                }),
              },
            ]}
            placeholderTextColor={theme.colors.textSecondary}
          />
        );

      default:
        return (
          <TextInput
            {...props}
            ref={inputRef}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            style={[
              styles.input,
              {
                color: theme.colors.text,
                fontFamily: getFontFamily({
                  fontFamily: font,
                }),
              },
            ]}
            placeholderTextColor={theme.colors.textSecondary}
          />
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
        color={theme.colors.textSecondary}
        name="magnify"
        style={styles.searchIcon}
      />
      {buildInputType()}
      {buildClear()}
    </View>
  );
});

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['default', 'bottomsheet']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Index.defaultProps = {
  style: {},
  type: 'default',
  value: '',
  placeholder: 'Search...',
};

export default Index;

import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Text, Icon, getFontFamily} from '@components';
import {useTheme, useFont} from '@configs';
import styles from './styles';

const Index = forwardRef((props, ref) => {
  const {colors} = useTheme();
  const font = useFont();
  const {
    style,
    type,
    size,
    label,
    info,
    value,
    onPressInfo,
    onChangeText,
    error,
    trailing,
  } = props;

  const inputRef = useRef();
  const [focus, setFocus] = useState(false);

  useImperativeHandle(ref, () => inputRef.current);

  /**
   * get border color
   */
  const getBorderColor = () => {
    if (error) {
      return colors.error;
    }
    if (focus) {
      return colors.primaryLight;
    }
    return colors.border;
  };

  /**
   * get size style
   */
  const getSizeStyle = () => {
    switch (size) {
      case 'large':
        return styles.large;
      case 'small':
        return styles.small;

      default:
        return styles.large;
    }
  };

  /**
   * get text style
   */
  const getTextStyle = () => {
    let textStyle = styles.textLarge;
    switch (size) {
      case 'large':
        textStyle = styles.textLarge;
        break;
      case 'small':
        textStyle = styles.textSmall;
        break;
      default:
        textStyle = styles.textLarge;
        break;
    }

    return {
      ...textStyle,
      fontFamily: getFontFamily({
        fontFamily: font,
        fontWeight: textStyle.fontWeight,
      }),
    };
  };

  /**
   * get size style
   */
  const getIconSizeStyle = () => {
    switch (size) {
      case 'large':
        return 24;
      case 'small':
        return 16;

      default:
        return 24;
    }
  };

  /**
   * on clear text
   */
  const onClear = () => {
    inputRef?.current?.clear?.();
    onChangeText?.('');
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
   * build info icon button
   */
  const buildInfo = () => {
    if (info) {
      return (
        <TouchableOpacity style={styles.rowInfo} onPress={onPressInfo}>
          <Icon name="information-outline" color={colors.secondary} size={16} />
        </TouchableOpacity>
      );
    }
  };

  /**
   * build clear action
   */
  const buildClear = () => {
    if (value) {
      return (
        <TouchableOpacity onPress={onClear}>
          <Icon
            name="close-circle"
            color={colors.text}
            size={getIconSizeStyle()}
          />
        </TouchableOpacity>
      );
    }
  };

  /**
   * build trailing
   */
  const buildTrailing = () => {
    if (trailing) {
      return <View style={styles.trailingContent}>{trailing}</View>;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[getSizeStyle(), {borderColor: getBorderColor()}]}>
        <View style={styles.rowContent}>
          <TextInput
            {...props}
            ref={inputRef}
            style={[styles.inputContent, {color: colors.text}, getTextStyle()]}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {buildClear()}
          {buildTrailing()}
          <View style={[styles.infoContent, {backgroundColor: colors.card}]}>
            <Text typography="subtitle" type="secondary">
              {label}
            </Text>
            {buildInfo()}
          </View>
        </View>
      </View>
      <Text typography="subtitle" color="error" style={styles.errorContent}>
        {error ?? ''}
      </Text>
    </View>
  );
});

export default Index;

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['default', 'bottomsheet']),
  size: PropTypes.oneOf(['large', 'small']),
  label: PropTypes.string,
  value: PropTypes.string,
  autoCapitalize: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.bool,
  onPressInfo: PropTypes.func,
  trailing: PropTypes.node,
};

Index.defaultProps = {
  style: {},
  type: 'default',
  size: 'large',
  label: 'Label',
  value: '',
  autoCapitalize: 'none',
  placeholder: null,
  error: null,
  info: false,
  onPressInfo: () => {},
  trailing: null,
};

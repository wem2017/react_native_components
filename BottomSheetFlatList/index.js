import React, {
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
  memo,
} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {
  BottomSheetModal,
  BottomSheetFlatList,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@configs';
import styles from './styles';

const Index = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => bottomSheetRef.current);
  const {theme} = useTheme();
  const bottomSheetRef = useRef();
  const {bottom} = useSafeAreaInsets();
  const {header, initHeight, onDismiss, enablePanDownToClose} = props;
  const snapPoints = useMemo(() => [initHeight, '100%'], [initHeight]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      backgroundStyle={{backgroundColor: theme.colors.card}}
      snapPoints={snapPoints}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="none"
      stackBehavior="push"
      onDismiss={onDismiss}
      handleComponent={() => (
        <>
          <View style={styles.indicatorContainer}>
            <View
              style={[styles.indicator, {backgroundColor: theme.colors.card}]}
            />
          </View>
          {header}
        </>
      )}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          {...backdropProps}
        />
      )}
      enablePanDownToClose={enablePanDownToClose}>
      <BottomSheetFlatList
        contentContainerStyle={{paddingBottom: bottom}}
        {...props}
      />
    </BottomSheetModal>
  );
});

Index.propTypes = {
  initHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  enablePanDownToClose: PropTypes.bool,
  onDismiss: PropTypes.func,
  header: PropTypes.element,
};

Index.defaultProps = {
  initHeight: '50%',
  enablePanDownToClose: true,
  onDismiss: () => {},
  header: null,
};

export default memo(Index);

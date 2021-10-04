import React, {useRef, useMemo, forwardRef, useImperativeHandle} from 'react';
import {View} from 'react-native';
import {useTheme} from '@configs';
import PropTypes from 'prop-types';
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import styles from './styles';

const Index = forwardRef((props, ref) => {
  const {colors} = useTheme();
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const bottomSheetRef = useRef(null);
  useImperativeHandle(ref, () => bottomSheetRef.current);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const {children} = props;

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      stackBehavior="push"
      handleComponent={() => (
        <View style={styles.indicatorContainer}>
          <View style={[styles.indicator, {backgroundColor: colors.card}]} />
        </View>
      )}
      backdropComponent={prop => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          {...prop}
        />
      )}
      enablePanDownToClose={true}>
      <BottomSheetView
        onLayout={handleContentLayout}
        style={[styles.container, {backgroundColor: colors.card}]}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default Index;

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};

Index.defaultProps = {
  style: {},
  children: null,
};

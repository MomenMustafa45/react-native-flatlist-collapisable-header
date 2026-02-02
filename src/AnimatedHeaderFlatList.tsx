import React from 'react';
import {
  StyleSheet,
  View,
  type FlatListProps,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

export type AnimatedHeaderFlatListProps<T> = FlatListProps<T> & {
  /** Height of the header in pixels */
  headerHeight: number;
  /** Function that renders the header component */
  renderHeader: () => React.ReactNode; // Changed from React.ReactNode to () => React.ReactNode
  /** Additional styles for the header container */
  headerContainerStyle?: ViewStyle;
  /** Additional styles for the content container */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Threshold for hiding the header (0 to 1) relative to headerHeight */
  hideThreshold?: number;
  scrollEventThrottle?: number;
  /** Animation configuration */
  animationConfig?: {
    /** Whether to fade out the header */
    fadeOut?: boolean;
    /** Whether to translate the header */
    translate?: boolean;
    /** Whether to scale the header */
    scale?: boolean;
  };
};

/**
 * A FlatList component with an animated header that hides on scroll.
 * @typeparam T - Type of items in the FlatList
 */
export function AnimatedHeaderFlatList<T>({
  headerHeight,
  renderHeader,
  onScroll,
  contentContainerStyle,
  headerContainerStyle,
  hideThreshold = 0.5,
  scrollEventThrottle = 16,
  animationConfig: userAnimationConfig = {},
  ...props
}: AnimatedHeaderFlatListProps<T>) {
  const scrollY = useSharedValue(0);

  const calculatedHideThreshold = headerHeight * hideThreshold;

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    scrollY.value = offsetY;

    if (onScroll) {
      onScroll(event);
    }
  };

  // Merge user config with defaults
  const animationConfig = {
    fadeOut: true,
    translate: true,
    scale: false,
    ...userAnimationConfig,
  };

  const headerContainerStyles = useAnimatedStyle(() => {
    const visibility = interpolate(
      scrollY.value,
      [0, calculatedHideThreshold],
      [1, 0],
      Extrapolation.CLAMP
    );

    let animatedStyle: ViewStyle = {};

    if (animationConfig.fadeOut) {
      animatedStyle = { ...animatedStyle, opacity: visibility };
    }

    let transforms: any[] = [];

    if (animationConfig.translate) {
      transforms.push({
        translateY: interpolate(visibility, [1, 0], [0, -20]),
      });
    }

    if (animationConfig.scale) {
      transforms.push({ scale: interpolate(visibility, [0, 1], [0.8, 1]) });
    }

    if (transforms.length > 0) {
      animatedStyle = { ...animatedStyle, transform: transforms };
    }

    return animatedStyle;
  });

  return (
    <View style={styles.listContainer}>
      <Animated.View
        style={[
          styles.headerViewContainer,
          { height: headerHeight },
          headerContainerStyles,
          headerContainerStyle,
        ]}
        pointerEvents="box-none"
      >
        {renderHeader()}
      </Animated.View>

      <FlatList<T>
        {...props}
        onScroll={scrollHandler}
        scrollEventThrottle={scrollEventThrottle}
        contentContainerStyle={[
          { paddingTop: headerHeight },
          contentContainerStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: { position: 'relative' },
  headerViewContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999999,
  },
});

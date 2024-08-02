import { Pressable, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { THEME } from '~/theme/global';

export function PanGesture() {
  const positonX = useSharedValue(0);
  const positonY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .minPointers(1)
    .onUpdate((event) => {
      positonX.value = event.translationX;
      // console.log(event.translationX)
      positonY.value = event.translationY;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: positonX.value }, { translateY: positonY.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styled.box, animatedStyle]}/>
    </GestureDetector>
  );
}

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    backgroundColor: THEME.COLORS.WHITE,
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: THEME.COLORS.GREEN_200,
    borderRadius: 15,
    zIndex: 1
  },
  box2: {
    width: 200,
    height: 200,
    backgroundColor: THEME.COLORS.GREEN_500,
    borderRadius: 15,
    zIndex: 0
  },
});

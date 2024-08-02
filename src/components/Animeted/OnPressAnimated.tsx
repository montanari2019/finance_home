import { Pressable, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { THEME } from '~/theme/global';

export function OnPressAnimated() {
    const position = useSharedValue(100);
    const doubleTap = useSharedValue(0);
  
    function onpressed() {
      position.value = withSpring(150);
    }
    function onpressedOut() {
      position.value = withSpring(100);
    }
  
    const onGesture = Gesture.Tap()
      .numberOfTaps(2)
      .onStart(() => {
        doubleTap.value = withTiming(doubleTap.value === 0 ? 1 : 0, { duration: 500 });
      });
  
    const animatedStyle = useAnimatedStyle(() => ({
      width: position.value,
      height: position.value,
      backgroundColor: interpolateColor(
        doubleTap.value,
        [0, 1],
        [THEME.COLORS.PURPLE_500, THEME.COLORS.GREEN_500]
      ),
    }));
  
  return (
    <GestureDetector gesture={onGesture}>
      <Pressable onPressIn={onpressed} onPressOut={onpressedOut}>
        <Animated.View style={[styled.box, animatedStyle]} />
      </Pressable>
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
    borderRadius: 15,
  },
});

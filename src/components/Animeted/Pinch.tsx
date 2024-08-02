import { Pressable, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { THEME } from '~/theme/global';

export function Pinch() {
  const scale = useSharedValue(1);

  const rotationGesture = Gesture.Pinch().onUpdate((event) => {
    scale.value = event.scale;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={rotationGesture}>
      <Animated.Image
        src={
          'https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
        }
        style={[styled.box, animatedStyle]}
      />
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
    width: 150,
    height: 150,
    backgroundColor: THEME.COLORS.GREEN_300,
    borderRadius: 15,
  },
});

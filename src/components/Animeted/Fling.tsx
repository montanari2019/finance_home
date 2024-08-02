import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { THEME } from '~/theme/global';

const START = 24
const LIMIT =  Dimensions.get("window").width - 124

export function Fling() {
  const positon = useSharedValue(START );
  const positonY = useSharedValue(0);

  const directionRigth = Gesture.Fling()
  .direction(Directions.RIGHT)
  .onStart((e)=>{
    positon.value = withTiming(LIMIT, {duration: 500})
  })

  const directionLeft = Gesture.Fling()
  .direction(Directions.LEFT)
  .onStart((e)=>{
    positon.value = withTiming(START, {duration: 500})
  })


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: positon.value }],
  }));

  return (
    <GestureDetector gesture={Gesture.Exclusive(directionRigth, directionLeft)}>
      <Animated.View style={[styled.box, animatedStyle]}/>
    </GestureDetector>
  );
}

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 15,
    backgroundColor: THEME.COLORS.WHITE,
  },

  box: {
    width: 100,
    height:  100,
    backgroundColor: THEME.COLORS.DANGER_900,
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

import { Pressable, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { THEME } from '~/theme/global';

export function LongPress() {
  
  const size = useSharedValue(100)
  
  const longPressGesture =  Gesture
  .LongPress()
  .onTouchesDown(() => {
    console.log('Long press detected');
    size.value = withSpring(size.value + 200, {duration: 15000})
  })
  .onEnd((e, sucess) => {
    if(sucess){
      console.log('Long press duration', e.duration)
      size.value = withSpring(100, {duration: 15000})
    }
    console.log(sucess)
  })


  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,

  }))
  
  return (
    
        <GestureDetector gesture={longPressGesture}>
          <Animated.View style={[styled.box, animatedStyle]} />
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
    width: 100,
    height: 100,
    backgroundColor: THEME.COLORS.DANGER_500,
    borderRadius: 15,
  },
});

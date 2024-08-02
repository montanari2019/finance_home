import { Pressable, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { THEME } from '~/theme/global';

export function Rotation() {
  
  const rotation = useSharedValue(0)
  
  const rotationGesture =  Gesture
  .Rotation()
  .onUpdate((e) =>{
    console.log('Rotation', e)
    rotation.value = e.rotation
  })
  

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{
      rotateZ: `${(rotation.value / Math.PI)  * 180}deg`
    }]

  }))
  
  return (
    
        <GestureDetector gesture={rotationGesture}>
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
    width: 300,
    height: 300,
    backgroundColor: THEME.COLORS.GREEN_900,
    borderRadius: 15,
  },
});

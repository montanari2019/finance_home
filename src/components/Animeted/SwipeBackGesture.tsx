import { useNavigation } from '@react-navigation/native';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SwipeBackGestureModel } from '~/model/swipeBackGesture.model';
import { AuthNavigatorRoutesPrivadeProps } from '~/routes/bottomTabNavigation';
import { THEME } from '~/theme/global';

export function SwipeBackGesture({ children, fromWhere }: SwipeBackGestureModel) {
  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>();
  const action = useSharedValue(0);
  const positonX = useSharedValue(0);
  function handleGoBack() {
    setTimeout(() => {
      navigation.navigate(fromWhere);
    }, 100);
  }

  const gestureActions = Gesture.Pan()
  .minPointers(1)
  .onUpdate((event) =>{
    if(event.translationX > 0){
      positonX.value = withTiming(event.translationX, {duration: 100});

    }
    
  })
  .onEnd(() =>{
    if(positonX.value > 100){
      runOnJS(handleGoBack)();
    }
    positonX.value = 0;
  })

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: positonX.value }],
      flex: 1,
    }));
  
  return (
    <GestureDetector gesture={gestureActions}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </GestureDetector>
  );
}

import { useNavigation } from '@react-navigation/native';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useSharedValue } from 'react-native-reanimated';
import { SwipeBackGestureModel } from '~/model/swipeBackGesture.model';
import { AuthNavigatorRoutesPrivadeProps } from '~/routes/bottomTabNavigation';

export function SwipeBackGesture({ children, fromWhere }: SwipeBackGestureModel) {
  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>();
  const action = useSharedValue(0);
  function handleGoBack() {
    setTimeout(() => {
      navigation.navigate(fromWhere);
    }, 100);
  }

  const gestureActions = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart((event) => {
      action.value = event.x;
    })
    .onEnd(() => {
      if (action.value < 70) {
        runOnJS(handleGoBack)();
      }
      action.value = 0;
    });

  return <GestureDetector gesture={gestureActions}>{children}</GestureDetector>;
}

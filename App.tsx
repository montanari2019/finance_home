import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScreenContent } from '~/screens/ScreenContent';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" barStyle={'light-content'} translucent={true} />
        <ScreenContent />
      </GestureHandlerRootView>
    </>
  );
}
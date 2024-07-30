import { StatusBar } from 'react-native';
import { ScreenContent } from '~/screens/ScreenContent';

export default function App() {
  return (
    <>
      <StatusBar  backgroundColor="transparent"  barStyle={"light-content"}  translucent={true} />
      <ScreenContent />
    </>
  );
}

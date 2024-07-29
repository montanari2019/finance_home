import { StatusBar } from 'expo-status-bar';
import { ScreenContent } from '~/screens/ScreenContent';

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="transparent" />
      <ScreenContent />
    </>
  );
}

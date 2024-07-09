
import { StatusBar } from 'expo-status-bar';
import { ScreenContent } from 'screens/ScreenContent';

export default function App() {
  return (
    <>
      <ScreenContent/>
      <StatusBar style="auto" backgroundColor='transparent' translucent/>
    </>
  );
}
 
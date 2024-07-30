import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Asap_400Regular, Asap_700Bold, useFonts } from '@expo-google-fonts/asap';
import { THEME } from '~/theme/global';
import { Login } from './Login';
import { Home } from './Home';
import { Routes } from '~/routes';
import { Loading } from '~/components/loading';

export function ScreenContent() {
  const [fontsLoaded] = useFonts({ Asap_400Regular, Asap_700Bold });
  return (
    <View style={styles.container}>
      {fontsLoaded ? <Routes /> : <Loading textFild />}

      {/* <Login /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.PURPLE_500,
  },
  separator: {
    backgroundColor: THEME.COLORS.PURPLE_700,
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.COLORS.GRAY_100,
  },
});

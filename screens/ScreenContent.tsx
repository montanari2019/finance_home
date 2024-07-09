import { StyleSheet, Text, View } from 'react-native';

import { THEME } from 'theme/global';
import { Login } from './Login';

export function ScreenContent() {
  return (
    <View style={styles.container}>
      <Login />
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

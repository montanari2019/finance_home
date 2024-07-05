import { StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from './EditScreenInfo';
import { THEME } from 'theme/global';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
    color: THEME.COLORS.GRAY_100
  },
});

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { THEME } from "~/theme/global";


interface LoadingProps {
  color?: string;
  textFild?: boolean;
}

export function Loading({ color = THEME.COLORS.PURPLE_500, textFild = false,}: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} />
      {textFild && <Text style={styles.textFild}>Carregando ...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  textFild: {
    color: THEME.COLORS.GRAY_200,
  },
});
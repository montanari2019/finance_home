import { StyleSheet } from "react-native";
import { THEME } from "~/theme/global";

export const styled = StyleSheet.create({
    contianer: {
      height: 160,
    },
  
    delete: {
      width: 60,
      height: 160,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: THEME.COLORS.DANGER_500,
  
    },
  
    update: {
      width: 60,
      height: 160,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: THEME.COLORS.PURPLE_500,
  
    },
  });
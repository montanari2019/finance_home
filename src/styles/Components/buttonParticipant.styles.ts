import { Platform, StyleSheet } from "react-native";
import { THEME } from "~/theme/global";

export const styled = StyleSheet.create({
    contianerNotPress:{
        justifyContent: "center",
        alignItems: 'center',
        width: 100,
        height: 42,
        borderRadius: 15,
        backgroundColor: THEME.COLORS.WHITE,
        ...Platform.select({
            android: {
              elevation: 8,
              
            },
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.19,
              shadowRadius: 3.84,
              elevation: 2,
            },
          }),
    },

    contianerPress: {
        justifyContent: "center",
        alignItems: 'center',
        width: 100,
        height: 42,
        borderRadius: 15,
        backgroundColor: THEME.COLORS.WHITE,
        borderWidth: 1,
        borderColor: THEME.COLORS.GREEN_500
    }
})
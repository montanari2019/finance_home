import { StyleSheet } from "react-native";
import { THEME } from "~/theme/global";

export const styled = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE
    },


    containerMain: {
  
        flex: 1,
      },

    containerButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 24,

    },
    containerCards:{
        // paddingVertical: 24,
        paddingHorizontal: 16,
        paddingBottom: 24,
        // marginBottom: 16
        // gap: 16,

    }

})
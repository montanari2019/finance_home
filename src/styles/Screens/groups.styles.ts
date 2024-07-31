import { StyleSheet } from "react-native";
import { THEME } from "~/theme/global";

export const styled = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE
    },


    containerMain: {
        marginHorizontal: 16,
        flex: 1,
      },

    containerButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    }

})
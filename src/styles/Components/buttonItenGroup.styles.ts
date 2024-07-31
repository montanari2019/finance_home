import { Platform, StyleSheet } from "react-native";
import { THEME } from "~/theme/global";

export const styled = StyleSheet.create({
    containerNotPress:{
        backgroundColor: THEME.COLORS.WHITE,
        width: 50,
        height: 45,
        borderRadius:10,
        alignItems: "center",
        justifyContent: "center",

        ...Platform.select({
            android:{
                elevation: 6,
                shadowColor: '#000'
            },
            ios:{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.19,
                shadowRadius: 3.84,
            }
        })

    },



    containerPress:{
        backgroundColor: THEME.COLORS.GRAY_50,
        width: 50,
        height: 45,
        borderRadius:10,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        // borderColor: THEME.COLORS.GRAY_200,

        // ...Platform.select({
        //     android:{
        //         elevation: 4,
                
        //     },
        //     ios:{
        //         shadowColor: THEME.COLORS.GRAY_600,
        //         shadowOffset: { width: 0, height: 4 },
        //         shadowOpacity: 0.19,
        //         shadowRadius: 3.84,
                
        //     }
        // })

    }
    
})
import { View } from "react-native"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigation } from "./bottomTabNavigation";

export function Routes(){
    const theme = DefaultTheme;
    theme.colors.background = "transparent";
    return (
        <View style={{flex: 1}}>
            <NavigationContainer theme={theme}>
                <BottomTabNavigation/>
            </NavigationContainer>
        </View>
    )
  
}
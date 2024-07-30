import { View } from "react-native";
import { Paragraph } from "~/components/paragraph";

export function User(){
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Paragraph text="User screen" fontWeight="700" textAlign="center"/>
        </View>
    )
}
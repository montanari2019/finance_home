import { View } from "react-native";
import { Paragraph } from "~/components/paragraph";

export function Groups(){
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Paragraph text="Grupos screen" fontWeight="700" textAlign="center"/>
        </View>
    )
}
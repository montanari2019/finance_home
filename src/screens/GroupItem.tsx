import { View } from "react-native";
import { Header } from "~/components/header";
import { Paragraph } from "~/components/paragraph";
import { THEME } from "~/theme/global";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthNavigatorRoutesPrivadeProps } from "~/routes/bottomTabNavigation";

type RoutesParamsProps = {
    id: string;
  };

export function GroupItem(){
    const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>()
    const route = useRoute()

    const { id } = route.params as RoutesParamsProps

    return (
        <View style={{flex: 1, backgroundColor:THEME.COLORS.GRAY_10}}>
            <Header/>

            <View>
                <Paragraph text={`GROUP id: ${id}`}/>
            </View>
        </View>
    )
}
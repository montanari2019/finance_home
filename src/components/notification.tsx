import { Text, View } from "react-native";
import { THEME } from '~/theme/global';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Paragraph } from "./paragraph";
import { styled } from "~/styles/Components/notification.styles";

export function NotificationBage(){
    return (
        <View>
            <Text style={styled.bage}>3</Text>
            <MaterialIcons name="notifications" size={30} color={THEME.COLORS.GRAY_100} />
        </View>
    )
}
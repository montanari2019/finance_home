import { Text, Touchable, TouchableOpacity } from "react-native";
import { ButtonDefaultModel } from "~/model/buttonDefault.model";
import { styled } from "~/styles/Components/buttonDefault.styles";
import { THEME } from "~/theme/global";
import { Paragraph } from "./paragraph";

export function ButtonDefault({ title, iconComponent, type, ...resto }:ButtonDefaultModel){

    const backgroundColor = type === "danger"  ? THEME.COLORS.DANGER_500 : THEME.COLORS.GREEN_500

    const styles  = {
        backgroundColor: backgroundColor,
        ...styled.button
    }
    return (
        <TouchableOpacity {...resto } style={styles}>
           <Paragraph text={title} color={THEME.COLORS.WHITE} fontWeight="700" />
            {iconComponent ? iconComponent : <></>}
        </TouchableOpacity>
    )
}
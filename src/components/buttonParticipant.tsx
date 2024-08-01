import { TouchableOpacity, View } from "react-native";
import { Paragraph } from "./paragraph";
import { THEME } from "~/theme/global";
import { styled } from "~/styles/Components/buttonParticipant.styles";
import { ButtonParticipantModel } from "~/model/buttonParticipant.model";

export function ButtonParticipant({ title, ...resto }: ButtonParticipantModel) {


    return (
        <TouchableOpacity style={styled.contianerNotPress} {...resto}>
            <Paragraph text={title} fontWeight="700" color={THEME.COLORS.GREEN_500}/>
        </TouchableOpacity>
    )
}

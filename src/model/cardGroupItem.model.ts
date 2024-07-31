import { TouchableOpacityProps } from "react-native";
import { GroupsDto } from "~/dto/groups.dtp";

export interface CardGroupModel extends TouchableOpacityProps {
    group: GroupsDto
}
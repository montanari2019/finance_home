
import { GroupsDto } from "~/dto/groups.dtp";
import { RectButtonProps } from 'react-native-gesture-handler';

export interface CardGroupModel extends RectButtonProps {
    group: GroupsDto
}
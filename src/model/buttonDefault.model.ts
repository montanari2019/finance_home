import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export interface ButtonDefaultModel extends TouchableOpacityProps{
    title: string,
    type: "danger" | "sucess",
    iconComponent?: ReactNode

}
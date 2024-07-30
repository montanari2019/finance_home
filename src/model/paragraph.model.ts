import { TextStyle } from "react-native";


export interface ParagraphModel  {
    text: string;
    fontSize?: number,
    color?: string,
    fontWeight?: '400' | '700',
    textAlign?: TextStyle['textAlign']
}
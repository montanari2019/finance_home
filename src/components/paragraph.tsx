import { ParagraphModel } from '~/model/paragraph.model';
import { StyleSheet, Text } from 'react-native';

export function Paragraph({ text, color, fontSize, fontWeight = '400' }: ParagraphModel) {
  return <Text style={{ color: color, fontSize: fontSize, fontWeight: fontWeight }}>{text}</Text>;
}

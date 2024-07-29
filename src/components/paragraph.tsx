import { ParagraphModel } from '~/model/paragraph.model';
import { StyleSheet, Text } from 'react-native';
import { THEME } from '~/theme/global';

export function Paragraph({
  text ,
  color = THEME.COLORS.GRAY_100 ,
  fontSize = THEME.SIZES.SIZE_XS,
  fontWeight = '400',
}: ParagraphModel) {
  return <Text style={{ color: color, fontSize: fontSize, fontWeight: fontWeight }}>{text}</Text>;
}

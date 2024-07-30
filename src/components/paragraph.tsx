import { ParagraphModel } from '~/model/paragraph.model';
import { StyleSheet, Text } from 'react-native';
import { THEME } from '~/theme/global';

export function Paragraph({
  text ,
  color = THEME.COLORS.GRAY_500 ,
  fontSize = THEME.SIZES.SIZE_XS,
  fontWeight = '400',
  textAlign = 'auto'
}: ParagraphModel) {
  return <Text  style={{ color, fontSize, fontWeight, textAlign }}>{text}</Text>;
}

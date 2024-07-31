import { View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Paragraph } from './paragraph';
import { formatDateDefault, formatterReais } from '~/utils/format';
import { styled } from '~/styles/Components/release.style';
import { THEME } from '~/theme/global';
import { ReleaseModel } from '~/model/release.model';

export function Release({ date_release, title, type, value, recurrent }: ReleaseModel) {
  const subtitle = recurrent ? 'Recorrente' : 'Não recorrente';

  const itemStyle = {
    backgroundColor: type === "output" ?  THEME.COLORS.DANGER_500 : THEME.COLORS.GREEN_500,
    ...styled.icon
  }
  return (
    <View style={styled.container}>
      <View style={itemStyle}>
        {type === 'input' ? (
            <MaterialIcons name="attach-money" size={24} color="white" />
        ) : (
            <MaterialIcons name="trending-down" size={24} color="white" />
        )}
      </View>
      <View style={styled.containerParagraph}>
        <View style={styled.paragraph}>
          <Paragraph text={title} />
          <Paragraph text={formatterReais.format(value)} fontWeight="700" />
        </View>

        <View style={styled.paragraph}>
          <Paragraph text={subtitle} fontWeight="700" fontSize={THEME.SIZES.SIZE_XSS} />
          <Paragraph
            text={formatDateDefault.format(new Date(date_release))}
            fontSize={THEME.SIZES.SIZE_XSS}
          />
        </View>
      </View>
    </View>
  );
}

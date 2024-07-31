import { LinearGradient } from 'expo-linear-gradient';
import { Platform, TouchableOpacity, View } from 'react-native';
import { styled } from '~/styles/Components/cardGroups.styles';
import { THEME } from '~/theme/global';
import { Paragraph } from './paragraph';
import { formatDateDefault, formatDateMonthAndYear, formatterReais } from '~/utils/format';
import { CardGroupModel } from '~/model/cardGroupItem.model';

export function CardGroupComponent({ group, ...resto }: CardGroupModel) {
  const colorDanger = [THEME.COLORS.DANGER_500, THEME.COLORS.DANGER_900];
  const colorSuccess = [THEME.COLORS.GREEN_500, THEME.COLORS.GREEN_900];
  return (
    <TouchableOpacity {...resto } style={styled.containerShadow} >
      <LinearGradient
        colors={group.saldo > 0 ? colorSuccess : colorDanger}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styled.containerGradiente}>


        <View style={styled.container}>
          <View>
            <View style={styled.titulos}>
              <Paragraph text={group.name} fontWeight="700" fontSize={THEME.SIZES.SIZE_XS} />
              <Paragraph text="Total" fontWeight="700" fontSize={THEME.SIZES.SIZE_XS} />
            </View>

            <View style={styled.titulos}>
              <Paragraph
                text={`Criado em ${formatDateDefault.format(group.date_crate)}`}
                fontWeight="400"
                fontSize={THEME.SIZES.SIZE_XSS}
              />
            </View>
          </View>

          <View style={styled.participantes}>
            <View>
              {group.users.map((user) => {
                return <Paragraph key={user} text={user} fontWeight="400" fontSize={THEME.SIZES.SIZE_XSS} />;
              })}
            </View>

            <View>
              <Paragraph
                text={formatterReais.format(group.saldo)}
                color={THEME.COLORS.GRAY_400}
                fontWeight="700"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

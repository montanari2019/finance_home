import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { CardGroupModel } from '~/model/cardGroupItem.model';
import { styled } from '~/styles/Components/cardGroups.styles';
import { THEME } from '~/theme/global';
import { formatDateDefault, formatterReais } from '~/utils/format';
import { Paragraph } from './paragraph';

export function CardGroupComponent({ group, ...resto }: CardGroupModel) {
  const colorDanger = [THEME.COLORS.DANGER_500, THEME.COLORS.DANGER_900];
  const colorSuccess = [THEME.COLORS.GREEN_500, THEME.COLORS.GREEN_900];

  const usersToDisplay = group.users.slice(0, 2); 
  const hasMoreUsers = group.users.length > 2;

  return (
    <RectButton {...resto}>
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
              {usersToDisplay.map((user) => (
                <Paragraph
                  key={user}
                  text={user}
                  fontWeight="400"
                  fontSize={THEME.SIZES.SIZE_XSS}
                />
              ))}
              {hasMoreUsers && (
                <Paragraph text="..." fontWeight="400" fontSize={THEME.SIZES.SIZE_XSS} />
              )}
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
    </RectButton>
  );
}

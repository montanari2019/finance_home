import { Text, View } from 'react-native';

import IlustratorTop from '../assets/vector_3.svg';
import { styled } from '~/styles/header.styles';
import { Paragraph } from './paragraph';
import { THEME } from '~/theme/global';
import { NotificationBage } from './notification';
import { AccountBalance } from './accountBalance';

export function Header() {
  return (
    <View style={styled.container}>
      <IlustratorTop style={styled.containerIlustratorTop} />

      <View style={styled.main}>
        <View style={styled.mainDisplay}>
          <View>
            <Paragraph
              fontSize={THEME.SIZES.SIZE_XXXS}
              text="Hoje, 15 de novembro"
              color={THEME.COLORS.GRAY_100}
            />

            <Paragraph
              fontSize={THEME.SIZES.SIZE_XS}
              text="Bem vindo, Ikaro"
              color={THEME.COLORS.GRAY_100}
              fontWeight="700"
            />
          </View>

          <NotificationBage />
        </View>

        <AccountBalance description='Conta: Ikaro Montanari' value={54218.45} />
      </View>
    </View>
  );
}

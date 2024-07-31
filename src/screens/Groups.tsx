import { View } from 'react-native';
import { ButtonItenGroup } from '~/components/buttonItenGroup';
import { Header } from '~/components/header';
import { Paragraph } from '~/components/paragraph';
import { Separator } from '~/components/separator';
import { styled } from '~/styles/Screens/groups.styles';
import { THEME } from '~/theme/global';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export function Groups() {
  return (
    <View style={styled.container}>
      <Header />

      <View style={styled.containerMain}>
        <View style={{ marginVertical: 32 }}>
          <Separator />
        </View>

        <View style={styled.containerButtons}>

          <ButtonItenGroup iconRender={ <MaterialIcons name="add" size={24} color={THEME.COLORS.PURPLE_500} />}/>
          <ButtonItenGroup iconRender={ <MaterialIcons name="keyboard-arrow-down" size={24} color={THEME.COLORS.DANGER} />}/>
          <ButtonItenGroup iconRender={ <MaterialIcons name="keyboard-arrow-up" size={24} color={THEME.COLORS.GREEN_500} />}/>
          <ButtonItenGroup iconRender={ <Paragraph text="Az" fontSize={16} fontWeight="700" color={THEME.COLORS.GRAY_300}/>}/>
        </View>
      </View>
    </View>
  );
}

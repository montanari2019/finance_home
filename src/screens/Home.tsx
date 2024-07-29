import { Header } from '~/components/header';
import { SafeAreaView, View } from 'react-native';
import { styled } from '~/styles/Home/home.styles';
import { ButtonDefault } from '~/components/buttonDefault';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Separator } from '~/components/separator';
import { Paragraph } from '~/components/paragraph';
import { THEME } from '~/theme/global';
import { PickerSelect } from '~/components/pickerSelect';

export function Home() {
  return (
    // <SafeAreaView style={styled.containerSafeArea}>
    <View style={styled.container}>
      <Header />

      <View style={styled.containerMain}>
        <View style={styled.mainButton}>
          <ButtonDefault
            title="Saida"
            type="danger"
            iconComponent={<MaterialIcons name="remove-circle-outline" size={24} color="white" />}
          />
          <ButtonDefault
            title="Entrada"
            type="sucess"
            iconComponent={<MaterialIcons name="add-circle-outline" size={24} color="white" />}
          />
        </View>

        <Separator />

        <View style={styled.headerLancamentoSession}>
          <Paragraph
            text="Lançamentos"
            color={THEME.COLORS.GRAY_500}
            fontWeight="700"
            fontSize={THEME.SIZES.SIZE_MD}
          />

            <PickerSelect/>
      
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
}

import { Header } from '~/components/header';
import { FlatList, SafeAreaView, SectionList, View } from 'react-native';
import { styled } from '~/styles/Screens/home.styles';
import { ButtonDefault } from '~/components/buttonDefault';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Separator } from '~/components/separator';
import { Paragraph } from '~/components/paragraph';
import { THEME } from '~/theme/global';
import { PickerSelectMesMovimento } from '~/components/pickerSelectMesMovimento';
import { Release } from '~/components/release';
import { releases } from '~/utils/obects';
import { ListRelease } from '~/components/listRelease';

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
        
        <ListRelease/>
      </View>
    </View>
    // </SafeAreaView>
  );
}

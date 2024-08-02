import { FlatList, Platform, ScrollView, ScrollViewComponent, View } from 'react-native';
import { ButtonItenGroup } from '~/components/buttonItenGroup';
import { Header } from '~/components/header';
import { Paragraph } from '~/components/paragraph';
import { Separator } from '~/components/separator';
import { styled } from '~/styles/Screens/groups.styles';
import { THEME } from '~/theme/global';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CardGroupComponent } from '~/components/cardGroups';
import { groups } from '~/utils/obects';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesPrivadeProps } from '~/routes/bottomTabNavigation';

export function Groups() {

  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>()


  function handleNavigationToGroupIten(id: string){
    navigation.navigate("groupItem", {id})
  }
  return (
    <View style={styled.container}>
      <Header />

      <View style={styled.containerMain}>
        <View style={{ marginVertical: 32 }}>
          <Separator />
        </View>

        <View style={styled.containerButtons}>
          <ButtonItenGroup
            iconRender={<MaterialIcons name="add" size={24} color={THEME.COLORS.PURPLE_500} />}
          />
          <ButtonItenGroup
            iconRender={
              <MaterialIcons name="keyboard-arrow-down" size={24} color={THEME.COLORS.DANGER_500} />
            }
          />
          <ButtonItenGroup
            iconRender={
              <MaterialIcons name="keyboard-arrow-up" size={24} color={THEME.COLORS.GREEN_500} />
            }
          />
          <ButtonItenGroup
            iconRender={
              <Paragraph text="Az" fontSize={16} fontWeight="700" color={THEME.COLORS.GRAY_300} />
            }
          />
        </View>

  
          {/* <View style={styled.containerCards}>
            {groups.map((index) => {
              return (
                <CardGroupComponent
                  group={index}
                  key={String(index.id + index.saldo + new Date(index.date_crate).getTime())}
                />
              );
            })}
          </View> */}



        <FlatList 
        style={styled.containerCards}
          data={groups}
          ListEmptyComponent={
            <Paragraph
              text="Nenhum grupo encontrado"
              fontSize={THEME.SIZES.SIZE_MD}
              textAlign="center"
            />
          }
          contentContainerStyle={{paddingBottom: 16, gap: 16}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CardGroupComponent 
              group={item}
              key={String(item.id)}
              // onPress={() => console.log('teste component: ', Platform.OS)}
              onPress={() => handleNavigationToGroupIten(item.id)}
              
            
            />
          )}
        />
      </View>
    </View>
  );
}

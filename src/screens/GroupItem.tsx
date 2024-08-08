import { FlatList, TouchableOpacity, View } from 'react-native';
import { Header } from '~/components/header';
import { Paragraph } from '~/components/paragraph';
import { THEME } from '~/theme/global';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { AuthNavigatorRoutesPrivadeProps } from '~/routes/bottomTabNavigation';
import { ButtonParticipant } from '~/components/buttonParticipant';
import { useCallback, useState } from 'react';
import { groups } from '~/utils/obects';
import { Participants } from '~/dto/participantes.dto';
import { MaterialIcons } from '@expo/vector-icons';
import { Separator } from '~/components/separator';
import { ListRelease } from '~/components/listRelease';
import { ROUTE_TYPES } from '~/routes/types.enum';
import { SwipeBackGesture } from '~/components/Animeted/SwipeBackGesture';

type RoutesParamsProps = {
  id: string;
};

export function GroupItem() {
  const navigation = useNavigation<AuthNavigatorRoutesPrivadeProps>();
  const route = useRoute();
  const [participantes, setParticipantes] = useState<Participants[]>([]);

  const { id } = route.params as RoutesParamsProps;

  function handleGoBack() {
    navigation.navigate('groups');
  }

  function filterParticipantes(id: string) {
    const filter = groups
      .filter((e) => e.id === id)
      .flatMap((item) => {
        return item.users.map((index) => {
          return {
            id: String(new Date().getTime().toString() + index),
            name: index,
          };
        });
      });

    setParticipantes(filter);
  }

  useFocusEffect(
    useCallback(() => {
      filterParticipantes(id);
    }, [id])
  );

  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.GRAY_10 }}>
      <Header />

      <SwipeBackGesture fromWhere={ROUTE_TYPES.GROUPS}>
        <View style={{ marginBottom: 16, marginTop: 32 }}>
          <Separator />
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            alignItems: 'center',
            marginLeft: 16,
          }}>
          <TouchableOpacity onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color={THEME.COLORS.GREEN_500} />
          </TouchableOpacity>

          <FlatList
            data={participantes}
            showsHorizontalScrollIndicator={false}
            horizontal
            ListEmptyComponent={
              <Paragraph
                text="Não existe lançamentos"
                textAlign="center"
                fontSize={THEME.SIZES.SIZE_MD}
              />
            }
            contentContainerStyle={{ gap: 5, paddingHorizontal: 16, paddingVertical: 16 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ButtonParticipant title={item.name} />}
          />
        </View>

        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <ListRelease />
        </View>
      </SwipeBackGesture>
    </View>
  );
}

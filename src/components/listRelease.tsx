import { FlatList, View } from 'react-native';
import { Release } from './release';
import { Paragraph } from './paragraph';
import { releases } from '~/utils/obects';
import { THEME } from '~/theme/global';
import { PickerSelectMesMovimento } from './pickerSelectMesMovimento';
import { styled } from '~/styles/Components/listRelease.style';

export function ListRelease() {
  return (
    <View style={styled.container}>
      <View style={styled.headerLancamentoSession}>
        <Paragraph
          text="Lançamentos"
          color={THEME.COLORS.GRAY_500}
          fontWeight="700"
          fontSize={THEME.SIZES.SIZE_MD}
        />

        <PickerSelectMesMovimento />
      </View>

      <FlatList
        // style={{ marginBottom: 16 }}
        data={releases}
        ListEmptyComponent={
          <Paragraph
            text="Não existe lançamentos"
            textAlign="center"
            fontSize={THEME.SIZES.SIZE_MD}
          />
        }
        contentContainerStyle={{ gap: 20, paddingBottom: 15 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Release
            date_release={item.date_release}
            recurrent={item.recurrent}
            title={item.title}
            type={item.type}
            value={item.value}
            key={item.value + index}
          />
        )}
      />
    </View>
  );
}

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { THEME } from '~/theme/global';

export function ButtonGroupComponent() {
  return (
    <>
      <TouchableOpacity style={styled.update} onPress={() => alert('Alterar')}>
        <MaterialIcons name="mode-edit-outline" size={24} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity style={styled.delete} onPress={() => alert('Deletar')}>
        <MaterialIcons name="delete" size={24} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
    </>
  );
}

const styled = StyleSheet.create({
  contianer: {
    // width: "100%",
    height: 160,
  },

  delete: {
    width: 60,
    height: 160,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.DANGER_500,
    // elevation: 8,
  },

  update: {
    width: 60,
    height: 160,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PURPLE_500,
    // elevation: 8,
  },
});

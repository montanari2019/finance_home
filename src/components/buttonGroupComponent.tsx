import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { THEME } from '~/theme/global';
import { styled } from '~/styles/Components/buttonGroupComponent.styles';

export function ButtonGroupComponent() {
  return (
    <View style={styled.contianer}>
      <TouchableOpacity style={styled.delete} onPress={() => alert('Deletar')}>
        <MaterialIcons name="delete" size={24} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>

      <TouchableOpacity style={styled.update} onPress={() => alert('Alterar')}>
        <MaterialIcons name="mode-edit-outline" size={24} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  );
}



import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, View } from 'react-native';
import { styled } from '~/styles/Components/buttonReleaseComponent.styles';
import { THEME } from '~/theme/global';

export function ButtonReleaseComponent() {
  return (
    <View style={styled.container}>
      <TouchableOpacity style={styled.update} onPress={() => alert('Alterar')}>
        <MaterialIcons name="mode-edit-outline" size={24} color={THEME.COLORS.PURPLE_500} />
      </TouchableOpacity>
      <TouchableOpacity style={styled.delete} onPress={() => alert('Deletar')}>
        <MaterialIcons name="delete" size={24} color={THEME.COLORS.DANGER_500} />
      </TouchableOpacity>
    </View>
  );
}

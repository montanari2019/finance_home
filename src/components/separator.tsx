import { View } from 'react-native';
import { THEME } from '~/theme/global';

export function Separator() {
  return (
    <View
      style={{
        backgroundColor: THEME.COLORS.GRAY_50,
        width: '40%',
        height: 5,
        borderRadius: 21,
        alignSelf: 'center',
      }}></View>
  );
}

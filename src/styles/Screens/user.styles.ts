import { StyleSheet } from 'react-native';
import { THEME } from '~/theme/global';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 15,
    backgroundColor: THEME.COLORS.WHITE,
  },

  box:{

    borderRadius: 15,
  }
});

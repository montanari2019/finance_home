import { Platform, StyleSheet } from 'react-native';
import { THEME } from '~/theme/global';

export const styled = StyleSheet.create({

  containerGradiente: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    elevation: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_50,


  },
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    paddingHorizontal: 23,
    paddingVertical: 20,

    width: '100%',
    height: 140,
    justifyContent: 'space-between',
  },

  titulos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  participantes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

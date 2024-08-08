import { Platform, StyleSheet } from 'react-native';
import { THEME } from '~/theme/global';

export const styled = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
   
    gap: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },
  delete: {
    width: 52,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: THEME.COLORS.WHITE,
    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.19,
        shadowRadius: 3.84,
        elevation: 2,
      },
    }),
  },

  update: {
    width: 52,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.WHITE,
    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.19,
        shadowRadius: 3.84,
        elevation: 2,
      },
    }),
  },
});

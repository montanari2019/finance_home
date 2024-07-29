import { StyleSheet } from 'react-native';
import { THEME } from '~/theme/global';

export const styled = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
  },

  containerMain: {
    marginHorizontal: 16,
  },

  mainButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 22,
    marginBottom: 35,
  },

  headerLancamentoSession: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: 300,
  },
});

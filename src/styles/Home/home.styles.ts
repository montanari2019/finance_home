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
    flex: 1,
  },

  mainButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 22,
    marginBottom: 35,

  },

  headerLancamentoSession: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: THEME.COLORS.DANGER
    // width: 300,
  }, 

  containerRelease:{

  }
});

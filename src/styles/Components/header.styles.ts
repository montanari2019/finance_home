import { Platform, StyleSheet } from 'react-native';
import { THEME } from '~/theme/global';

export const styled = StyleSheet.create({
  container: {
    height: 289,
    // flex: 1,
    backgroundColor: THEME.COLORS.PURPLE_500,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  containerIlustratorTop: {
    top: 0,
    right: 0,
    position: 'absolute',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },

    }),
  },

  main: {
    paddingTop: 25,
    flex: 1,
    marginVertical: 45,
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },

  mainDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

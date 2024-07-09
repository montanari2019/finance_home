import { StyleSheet } from 'react-native';
import { THEME } from 'theme/global';

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.PURPLE_500,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerIlustratorBottom: {
    bottom: 0,
    position: 'absolute',
  },
  containerIlustratorTop: {
    top: 0,
    right: 0,
    position: 'absolute',
  },

  button: {
    position: 'absolute',
    bottom: 150,
    width: '90%',
    backgroundColor: THEME.COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 26,
    borderRadius: 15,
  },

  paragraph: {
    color: THEME.COLORS.GRAY_300,
  },
});

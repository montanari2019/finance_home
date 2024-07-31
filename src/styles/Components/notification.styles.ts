import { StyleSheet } from 'react-native';
import { THEME } from '~/theme/global';

export const styled = StyleSheet.create({
  bage: {
    color: THEME.COLORS.WHITE,
    backgroundColor: THEME.COLORS.DANGER,
    width: 15,
    height: 15,
    borderRadius: 50,
    // borderWidth: 1,
    fontSize: THEME.SIZES.SIZE_XXXS - 2,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 1,
    top: -5,
  },
});

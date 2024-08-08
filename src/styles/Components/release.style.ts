import { StyleSheet } from 'react-native';
import { THEME } from '~/theme/global';

export const styled = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    height: 60,
    backgroundColor: THEME.COLORS.GRAY_10
  },

  icon: {
    width: 42,
    height: 42,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  containerParagraph: {
    gap: 8,
    flex:1,
  },

  paragraph:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  }
});

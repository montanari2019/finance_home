import { Pressable, StyleSheet, View } from 'react-native';

import { THEME } from '~/theme/global';
import { Paragraph } from '../paragraph';
import { GestureDetector, Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { ReactNode, useState } from 'react';

interface ButtonSwipeableProps {
  children: ReactNode;
  rightActionChidren: ReactNode;
}
export function ButtonSwipeable({ children, rightActionChidren }: ButtonSwipeableProps) {
  const [isSwiped, setIsSwiped] = useState(false);

  return (
    <Swipeable

      onSwipeableOpen={() => setIsSwiped(true)}
      onSwipeableClose={() => setIsSwiped(false)}
      renderRightActions={() => rightActionChidren}>
      {children}
    </Swipeable>
  );
}

const styled = StyleSheet.create({
  containerOnSwiped: {
    width: 350,
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 0,

    backgroundColor: THEME.COLORS.GREEN_400,
  },
  containerNoSwiped: {
    width: 350,
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,

    backgroundColor: THEME.COLORS.GREEN_400,
  },

  containerOpen: {
    width: 100,
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.GRAY_100,

    backgroundColor: THEME.COLORS.WHITE,
  },
});

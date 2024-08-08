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

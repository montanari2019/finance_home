import { View } from 'react-native';
import { Paragraph } from '~/components/paragraph';
import { styled } from '~/styles/Screens/user.styles';

import { OnPressAnimated } from '~/components/Animeted/OnPressAnimated';
import { LongPress } from '~/components/Animeted/LongPress';
import { Rotation } from '~/components/Animeted/Rotation';
import { Pinch } from '~/components/Animeted/Pinch';
import { ScrollView } from 'react-native-gesture-handler';
import { PanGesture } from '~/components/Animeted/PanGesture';
import { Fling } from '~/components/Animeted/Fling';
import { ButtonSwipeable } from '~/components/Animeted/ButtonSwipeable';

export function User() {
  return (
    <View style={styled.container}>
      <Paragraph text="User screen" fontWeight="700" textAlign="center" />




     <View style={{alignItems: "center"}}>



    
      {/* <OnPressAnimated /> */}
        {/* <LongPress /> */}
          {/* <Rotation /> */}
          {/* <Pinch /> */}
     </View>

      <Fling />
      {/* <PanGesture /> */}
    </View>
  );
}

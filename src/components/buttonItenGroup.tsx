import { TouchableOpacity } from 'react-native';
import { Paragraph } from './paragraph';
import { styled } from '~/styles/Components/buttonItenGroup.styles';
import { THEME } from '~/theme/global';
import { useState } from 'react';
import {ButtonItenGroupModel} from "../model/buttonItenGroup.model"

export function ButtonItenGroup({ iconRender, ...resto }:ButtonItenGroupModel) {
  const [pressd, setPressd] = useState(false);

  function handlePress() {
    if (pressd === true) {
      setPressd(false);
    } else {
      setPressd(true);
    }
  }
  return (
    <TouchableOpacity {...resto} onPress={handlePress} style={pressd ? styled.containerPress : styled.containerNotPress}>
       {iconRender}
    </TouchableOpacity>


  );
}

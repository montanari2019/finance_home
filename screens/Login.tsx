import { Text, TouchableOpacity, View } from 'react-native';
import { Svg } from 'react-native-svg';
import { styled } from 'styles/login.styles';

import IlustratorBottom from '../assets/vector_2.svg';
import IlustratorCenter from '../assets/vector_1.svg';
import IlustratorTop from '../assets/vector_3.svg';
import LogoGoogle from '../assets/logo_google.svg';
import LogoProject from '../assets/logoProject.svg';

export function Login() {
  return (
    <View style={styled.container}>
      <View style={styled.containerIlustratorBottom}>
        <IlustratorBottom />
      </View>
      <View style={styled.containerIlustratorBottom}>
        <IlustratorCenter />
      </View>

      <View style={styled.containerIlustratorTop}>
        <IlustratorTop />
      </View>

      <View>
        <LogoProject />
      </View>

      <TouchableOpacity style={styled.button}>
        <LogoGoogle />
        <Text style={styled.paragraph}>Login com o Google</Text>
      </TouchableOpacity>
    </View>
  );
}

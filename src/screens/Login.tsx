import { Text, TouchableOpacity, View } from 'react-native';


import LogoGoogle from '../assets/logo_google.svg';
import LogoProject from '../assets/logoProject.svg';
import IlustratorCenter from '../assets/vector_1.svg';
import IlustratorBottom from '../assets/vector_2.svg';
import IlustratorTop from '../assets/vector_3.svg';
import { styled } from '~/styles/Screens/login.styles';

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

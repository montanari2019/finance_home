import { Header } from '~/components/header';
import { SafeAreaView, View } from 'react-native';
import { styled } from '~/styles/home.styles';

export function Home() {
  return (
    <SafeAreaView style={styled.containerSafeArea}>
      <View style={styled.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
}

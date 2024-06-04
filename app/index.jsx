import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">hello world</Text>
      <Link href="/profile" style={{color: 'blue'}}>Ir para o perfil</Link>
      <StatusBar style="auto" />
    </View>
  );
}

import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className="gap-4">
      <TouchableOpacity className="items-center self-center rounded-md bg-white p-4 shadow-sm">
        <Image source={{ uri: 'https://avatar.iran.liara.run/public/1' }} className="h-24 w-24" />
        <Text className="text-3xl">Zafer AYAN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
// 11.05

export default HomeScreen;

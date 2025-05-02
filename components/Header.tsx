import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

type HeaderProps = {
  title?: string;
};

const Header = ({ title = 'Online Grocery' }: HeaderProps) => {
  return (
    <View className="flex-row items-center px-4 py-3 bg-white">
      <Ionicons name="menu-outline" size={24} color="black" />
      <Text className="flex-1 text-center text-2xl font-semibold">{title}</Text>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
  );
};

export default Header;
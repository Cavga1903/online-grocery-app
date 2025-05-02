// components/SearchBar.tsx
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (text: string) => void;
}) => {
  return (
    <View className="flex-row gap-4 px-4">
      <View className="flex-1 flex-row items-center gap-2 rounded-xl bg-white p-4">
        <Ionicons name="search-outline" size={24} color="#999" />
        <TextInput
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
          className="flex-1"
        />
        <TouchableOpacity className="items-end">
          <MaterialCommunityIcons name="microphone-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <View className="rounded-xl bg-white p-4">
        <Ionicons name="options" size={24} color="#999" />
      </View>
    </View>
  );
};

export default SearchBar;

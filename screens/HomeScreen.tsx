// screens/HomeScreen.tsx
import Header from 'components/Header';
import MainMenu from 'components/MainMenu';
import SearchBar from 'components/SearchBar';
import Offers from 'components/Offers';
import Recommended from 'components/Recommended';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { useState } from 'react';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Dessert');
  const [search, setSearch] = useState<string>(''); // ✅ arama state'i eklendi

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="gap-4">
          <Header />
          <SearchBar search={search} setSearch={setSearch} /> {/* ✅ props verildi */}
          <MainMenu onCategorySelect={setSelectedCategory} />
          <Offers category={selectedCategory} search={search} /> {/* ✅ props verildi */}
          <Recommended search={search} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
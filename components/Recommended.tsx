// components/Recommended.tsx
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import OfferCard from './OfferCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { OfferCardProps } from '../types/OfferCardProps';

const Recommended = ({ search }: { search: string }) => {
  const [data, setData] = useState<OfferCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRecommended = async () => {
    try {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
      );
      const formatted = res.data.meals.slice(0, 5).map((meal: any) => ({
        id: meal.idMeal,
        title: meal.strMeal,
        image: meal.strMealThumb,
        price: `$${(Math.random() * 10 + 5).toFixed(2)}/kg`,
        discount: Math.random() > 0.6 ? `${Math.floor(Math.random() * 20)}% Off` : undefined,
      }));
      setData(formatted);
    } catch (err) {
      console.error('Recommended error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

  // 🔍 Search filtresi
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View className="items-center justify-center py-6">
        <ActivityIndicator size="large" color="#10b981" />
      </View>
    );
  }

  return (
    <View className="px-4 mt-6">
      <View className="flex-row justify-between mb-2">
        <Text className="text-lg font-bold">Recommended for you</Text>
        <Text className="text-green-600">View All</Text>
      </View>

      <FlatList
        horizontal
        data={filteredData} // 🔥 filtrelenmiş liste
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OfferCard {...item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Recommended;
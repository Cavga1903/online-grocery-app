// components/Offers.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import OfferCard from './OfferCard';
import axios from 'axios';
import { OfferCardProps } from '../types/OfferCardProps';

type OffersProps = {
  category: string;
  search: string; // ✅ arama prop'u
};

const Offers = ({ category, search }: OffersProps) => {
  const [offers, setOffers] = useState<OfferCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMeals = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const formattedData: OfferCardProps[] = res.data.meals.map((meal: any) => ({
        id: meal.idMeal,
        title: meal.strMeal,
        price: `$${(Math.random() * 10 + 5).toFixed(2)}/kg`,
        image: meal.strMealThumb,
        discount: Math.random() > 0.5 ? `${Math.floor(Math.random() * 20) + 5}% Off` : undefined,
      }));
      setOffers(formattedData);
    } catch (err) {
      console.error('Teklifler alınamadı:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [category]);

  // ✅ Arama filtresi
  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View className="items-center justify-center py-6">
        <ActivityIndicator size="large" color="#22c55e" />
      </View>
    );
  }

  return (
    <View className="px-4 mt-2">
      <View className="flex-row justify-between mb-2">
        <Text className="text-lg font-bold">Offers for you</Text>
        <Text className="text-green-600">View All</Text>
      </View>

      <FlatList
        horizontal
        data={filteredOffers} // ✅ filtrelenmiş data
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OfferCard {...item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Offers;
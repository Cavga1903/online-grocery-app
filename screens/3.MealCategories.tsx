// screens/3.MealCategories.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const Meals = () => {
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { category } = route.params as { category: string };

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#22c55e" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4 text-center">{category} Meals</Text>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-slate-100 rounded-xl p-3 w-[48%]"
            onPress={() => navigation.navigate('MealDetail', { mealId: item.idMeal })}
          >
            <Image source={{ uri: item.strMealThumb }} className="h-32 w-full rounded-md mb-2" />
            <Text className="text-center font-semibold">{item.strMeal}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Meals;
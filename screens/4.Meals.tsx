// screens/4.Meals.tsx
import { useRoute, RouteProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/StackNavigator';

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
};

type MealResponse = {
  meals: Meal[];
};

const MealDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MealDetail'>>();
  const { mealId } = route.params;

  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data: MealResponse) => setMeal(data.meals[0]));
  }, []);

  if (!meal) {
    return <Text className="p-4 text-center text-lg">Yükleniyor...</Text>;
  }

  return (
    <SafeAreaView className="bg-white">
      <ScrollView>
        <Image source={{ uri: meal.strMealThumb }} className="h-64 w-full" />
        <View className="gap-2 p-4">
          <Text className="text-3xl font-bold">{meal.strMeal}</Text>
          <Text className="bg-pink-500 text-white px-3 py-1 rounded-xl w-max text-sm">
            {meal.strCategory}
          </Text>
          <Text className="text-xl font-bold mt-4 mb-1">Yapılışı</Text>
          <Text>{meal.strInstructions}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetail;
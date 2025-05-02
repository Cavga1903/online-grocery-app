// navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Ekranlar
import HomeScreen from '../screens/HomeScreen';
import Meals from '../screens/3.MealCategories';
import MealDetail from '../screens/4.Meals';

// Navigation parametre tipleri
export type RootStackParamList = {
  Home: undefined;
  Meals: { category: string };
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="MealDetail" component={MealDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
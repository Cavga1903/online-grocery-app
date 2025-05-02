// components/Categories.tsx
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import axios from 'axios';
import { Category } from '../types/meal';

type CategoriesProps = {
  onSelect: (category: string) => void;
};

const Categories = ({ onSelect }: CategoriesProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => setCategories(res.data.categories));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="p-4 bg-white rounded-t-3xl"
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.idCategory}
          className="items-center mr-4 rounded-md bg-slate-100 p-2 w-20"
          onPress={() => onSelect(category.strCategory)}
        >
          <Image
            source={{ uri: category.strCategoryThumb }}
            className="h-12 w-12"
            resizeMode="contain"
          />
          <Text className="text-xs text-center mt-1">{category.strCategory}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;
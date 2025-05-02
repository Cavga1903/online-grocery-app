import React from 'react';
import { View, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/5.CartScreen';
import ProfileScreen from '../screens/6.ProfileScreen';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Placeholder = ({ label }: { label: string }) => (
  <View className="flex-1 items-center justify-center">
    <Text className="text-xl font-semibold text-green-800">{label} Page</Text>
  </View>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#156B44',
          height: Platform.OS === 'ios' ? 55 : 100,
          position: 'absolute',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
        tabBarIcon: ({ focused }) => {
          const iconMap: Record<string, React.ReactNode> = {
            Home: <Entypo name="home" size={24} color={focused ? 'green' : 'white'} />,
            Cart: <AntDesign name="shoppingcart" size={24} color={focused ? 'green' : 'white'} />,
            Location: <Feather name="map-pin" size={24} color={focused ? 'green' : 'white'} />,
            Wishlist: (
              <MaterialIcons name="favorite" size={24} color={focused ? 'green' : 'white'} />
            ),
            Profile: <Ionicons name="person-sharp" size={24} color={focused ? 'green' : 'white'} />,
          };

          return focused ? (
            <View
              style={{
                marginHorizontal: 8,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: 'white',
                borderWidth: 4,
                borderColor: '#156B44',
                top: -20,
              }}>
              {iconMap[route.name]}
            </View>
          ) : (
            iconMap[route.name]
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Location" children={() => <Placeholder label="Location" />} />
      <Tab.Screen name="Wishlist" children={() => <Placeholder label="Wishlist" />} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

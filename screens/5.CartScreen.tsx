import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

const CartScreen = () => {
  const { cart, removeFromCart, decreaseQuantity } = useCart();

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row items-center justify-between border-b border-gray-200 py-3 px-4">
      <View className="flex-1">
        <Text className="font-semibold">{item.title}</Text>
        <Text className="text-sm text-gray-500">
          {item.quantity} × {item.price}
        </Text>
      </View>
      <View className="flex-row items-center gap-3">
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
          <AntDesign name="minuscircleo" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Ionicons name="trash-outline" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Your Cart" />

      {/* Eğer sepet boşsa */}
      {cart.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500 text-lg">Your cart is empty.</Text>
        </View>
      ) : (
        <>
          {/* Scrollable ürün listesi */}
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 140 }}
            className="flex-1 bg-white"
          />

          {/* Sabit Alt Kısım */}
          <View className="absolute left-0 right-0 bottom-28 px-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-lg font-semibold">Total</Text>
              <Text className="text-lg font-bold text-green-700">${total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity className="rounded-xl bg-red-600 py-3">
              <Text className="text-center text-white text-lg font-bold">Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
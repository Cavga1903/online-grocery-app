import { View, Text, Image, TouchableOpacity } from 'react-native';
import { OfferCardProps } from '../types/OfferCardProps';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCart } from '../context/CartContext'; // ✅ Sepet fonksiyonu

const OfferCard = ({ id, title, price, image, discount }: OfferCardProps) => {
  const { addToCart } = useCart(); // ✅ Sepete ürün ekle

  return (
    <View className="relative mr-4 w-[160px] overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      {/* İndirim etiketi */}
      {discount && (
        <View className="absolute right-2 top-2 z-10 rounded-md bg-green-600 px-2 py-1">
          <Text className="text-xs font-bold text-white">{discount}</Text>
        </View>
      )}

      {/* Ürün görseli */}
      <Image
        source={{ uri: image }}
        className="h-24 w-24 self-center rounded-md"
        resizeMode="cover"
      />

      {/* Ürün başlığı */}
      <Text className="mt-2 text-base font-semibold">{title}</Text>

      {/* Sabit satıcı ismi */}
      <View className="flex-row items-center gap-1">
        <Ionicons name="globe-outline" size={10} color="#888" />
        <Text className="text-xs text-gray-500">Darrell Steward</Text>
      </View>

      {/* Fiyat ve buton */}
      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-sm font-semibold">{price}</Text>
        <TouchableOpacity
          onPress={
            () => addToCart({ id, title, price, image, discount }) // ✅ Sepete gönder
          }>
          <AntDesign name="plussquare" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OfferCard;

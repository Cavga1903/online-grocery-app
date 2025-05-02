import 'react-native-reanimated'; // En üste!
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from './navigation/TabNavigator';
import { CartProvider } from './context/CartContext'; // ✅ Sepet context'i
import './global.css';
import { UserProvider } from 'context/UserContext';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <CartProvider>
          <UserProvider>
            <TabNavigator />
          </UserProvider>
        </CartProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

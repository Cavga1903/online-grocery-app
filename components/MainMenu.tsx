// components/MainMenu.tsx
import { View } from 'react-native';
import Categories from './Categories';

type MainMenuProps = {
  onCategorySelect: (category: string) => void;
};

const MainMenu = ({ onCategorySelect }: MainMenuProps) => {
  return (
    <View className="gap-4">
      <Categories onSelect={onCategorySelect} />
    </View>
  );
};

export default MainMenu;
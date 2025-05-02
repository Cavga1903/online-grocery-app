import Button from 'components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className="gap-4">
      <Button text="MyButton" />
      <Button text="MyButton" variant="primary" />
      <Button text="MyButton" variant="danger" />
      <Button text="MyButton" variant="success" />
      <Button text="MyButton" variant="danger" className="bg-yellow-500 p-8" />
    </SafeAreaView>
  );
};

export default HomeScreen;

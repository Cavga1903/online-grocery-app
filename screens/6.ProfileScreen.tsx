import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import Header from '../components/Header';

const ProfileScreen = () => {
  const { user, setUser } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = () => {
    setUser(form);
    setEditMode(false);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // ✔️ hâlâ geçerli ama deprecated uyarısı çıkabilir
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      console.log('Selected Image:', imageUri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Profile" />
      <ScrollView className="flex-1 bg-white p-4">
        <Text className="mb-4 text-2xl font-bold">Profile</Text>

        <TouchableOpacity onPress={editMode ? pickImage : undefined} className="mb-4 items-center">
          <Image
            source={{ uri: form.avatar || 'https://via.placeholder.com/100x100.png?text=Avatar1' }}
            className="h-24 w-24 rounded-full border border-green-300"
          />
          {editMode && <Text className="mt-2 text-green-600">Change Photo</Text>}
        </TouchableOpacity>

        {(['name', 'email', 'phone', 'address'] as const).map((field) => (
          <View key={field} className="mb-4">
            <Text className="mb-1 capitalize text-gray-600">{field}</Text>
            <TextInput
              className="rounded-xl border border-gray-300 px-4 py-2"
              editable={editMode}
              value={form[field] ?? ''}
              onChangeText={(val) => handleChange(field, val)}
            />
          </View>
        ))}

        <TouchableOpacity
          className="mt-2 rounded-xl bg-green-600 p-3"
          onPress={editMode ? handleSave : () => setEditMode(true)}>
          <Text className="text-center text-lg font-bold text-white">
            {editMode ? 'Save' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

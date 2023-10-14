import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useEffect, useState } from "react";
import {
  handleUpload,
  pickImageFromLibrary,
  takePicture,
} from "../utils/imagePickerHelpers";

export default function TabTwoScreen() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageFromLibrary = async () => {
    const imageUri = await pickImageFromLibrary();
    if (imageUri) {
      setSelectedImg(imageUri);
    }
  };

  const handleTakePicture = async () => {
    const imageUri = await takePicture();
    if (imageUri) {
      setSelectedImg(imageUri);
    }
  };

  const uploadImage = async (img: string) => {
    if (img) {
      setLoading(true);

      await handleUpload();
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

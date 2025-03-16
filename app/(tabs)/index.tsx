import { DownloadPicture } from "@/components/DownloadPicture";
import Feather from "@expo/vector-icons/Feather";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

export default function Explore() {
  const { currentTheme } = useTheme();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  const wallpapers = useWallpapers();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: Colors[currentTheme].background },
      ]}
    >
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            source={{ uri:  "https://ideogram.ai/assets/image/lossless/response/emq4cQaSSJCXE0Fey1X3HA" }}
            style={styles.headerImage}
          />
        }
      >
        <ThemedView>
          <FlatList
            numColumns={2}
            data={wallpapers}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  onPress={() => {
                    setSelectedWallpaper(item);
                  }}
                  wallpaper={item}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          pictureOpen={!!selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: 10,
  },
  headerImage: {
    resizeMode: "cover",
    width: "100%",
    height: 300,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    padding: 4,
  },
});

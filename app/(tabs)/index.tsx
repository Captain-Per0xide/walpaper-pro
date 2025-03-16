import { DownloadPicture } from "@/components/DownloadPicture";
import Feather from "@expo/vector-icons/Feather";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/context/ThemeContext";

export default function Explore() {
  const { currentTheme } = useTheme();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  const wallpapers = useWallpapers();

  const renderWallpaperGrid = () => {
    const rows = [];
    for (let i = 0; i < wallpapers.length; i += 2) {
      const row = (
        <View key={i} style={styles.row}>
          <View style={styles.imageContainer}>
            <ImageCard
              onPress={() => setSelectedWallpaper(wallpapers[i])}
              wallpaper={wallpapers[i]}
            />
          </View>
          {wallpapers[i + 1] && (
            <View style={styles.imageContainer}>
              <ImageCard
                onPress={() => setSelectedWallpaper(wallpapers[i + 1])}
                wallpaper={wallpapers[i + 1]}
              />
            </View>
          )}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

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
            source={{ uri: "https://ideogram.ai/assets/image/lossless/response/emq4cQaSSJCXE0Fey1X3HA" }}
            style={styles.headerImage}
          />
        }
      >
        <ThemedView style={styles.gridContainer}>
          {renderWallpaperGrid()}
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
  },
  headerImage: {
    resizeMode: "cover",
    width: "100%",
    height: 300,
  },
  gridContainer: {
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
});

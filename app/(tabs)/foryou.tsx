import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageCard } from '@/components/ImageCard';
import { DownloadPicture } from '@/components/DownloadPicture';
import { useWallpapers, Wallpaper } from '@/hooks/useWallpapers';
import { useState } from 'react';
import UserLogo from '@/components/UserLogo';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const { currentTheme } = useTheme();
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors[currentTheme].background }]}>
      <UserLogo/>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { 
            backgroundColor: Colors[currentTheme].background 
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors[currentTheme].tint
          },
          tabBarActiveTintColor: Colors[currentTheme].tint,
          tabBarInactiveTintColor: Colors[currentTheme].tabIconDefault,
        }}
      >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function WallpaperGrid({ wallpapers, onSelectWallpaper }: { 
  wallpapers: Wallpaper[], 
  onSelectWallpaper: (wallpaper: Wallpaper) => void 
}) {
  const rows = [];
  for (let i = 0; i < wallpapers.length; i += 2) {
    const row = (
      <View key={i} style={styles.row}>
        <View style={styles.imageContainer}>
          <ImageCard
            onPress={() => onSelectWallpaper(wallpapers[i])}
            wallpaper={wallpapers[i]}
          />
        </View>
        {wallpapers[i + 1] && (
          <View style={styles.imageContainer}>
            <ImageCard
              onPress={() => onSelectWallpaper(wallpapers[i + 1])}
              wallpaper={wallpapers[i + 1]}
            />
          </View>
        )}
      </View>
    );
    rows.push(row);
  }
  return rows;
}

function LibraryScreen() {
  const { currentTheme } = useTheme();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
  const wallpapers = useWallpapers();

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.gridContainer}>
          <WallpaperGrid 
            wallpapers={wallpapers} 
            onSelectWallpaper={setSelectedWallpaper}
          />
        </ThemedView>
      </ScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          pictureOpen={!!selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </ThemedView>
  );
}

function LikedScreen() {
  const { currentTheme } = useTheme();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
  const wallpapers = useWallpapers();

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.gridContainer}>
          <WallpaperGrid 
            wallpapers={wallpapers} 
            onSelectWallpaper={setSelectedWallpaper}
          />
        </ThemedView>
      </ScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          pictureOpen={!!selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </ThemedView>
  );
}

function SuggestedScreen() {
  const { currentTheme } = useTheme();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
  const wallpapers = useWallpapers();

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.gridContainer}>
          <WallpaperGrid 
            wallpapers={wallpapers} 
            onSelectWallpaper={setSelectedWallpaper}
          />
        </ThemedView>
      </ScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          pictureOpen={!!selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
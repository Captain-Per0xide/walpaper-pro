import { DownloadPicture } from "@/components/DownloadPicture";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useWallpapers } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";


export default function Explore(){
    const { currentTheme } = useTheme();
    const [pictureOpen, setPictureOpen] = useState(false);
    const wallpapers= useWallpapers();
    return (
            <SafeAreaView style={[styles.container,{ backgroundColor: Colors[currentTheme].background }]}>
                
                <ParallaxScrollView headerBackgroundColor={{dark:"black",light:"white"}} headerImage={<Image source={{ uri: wallpapers[0].url??"" }} style={styles.headerImage} />}>
                <ThemedView>
                <FlatList 
                numColumns={2}
        data={wallpapers}
        renderItem={({item}) => <View style={styles.imageContainer}>
            <ImageCard wallpaper={item} />
        </View>}
        keyExtractor={item => item.name}
      />   
                </ThemedView>
                </ParallaxScrollView>
            </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      gap: 10,
    },
    headerImage: {
      width: '100%',
      height: 400,
    },
    imageContainer: {
      flex: 1,
      width: '100%',
      padding: 4,
      
    },
    row: {
      flex: 1,
      justifyContent: 'space-around',
    }
  });
  
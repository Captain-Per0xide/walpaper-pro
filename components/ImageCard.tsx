import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons } from "@expo/vector-icons";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Colors } from "@/constants/Colors";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

export function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  const { currentTheme } = useTheme();
  return (
    <Pressable onPress={onPress}>
        <View>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.labelContainer}>
        <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name={"favorite-outline"}
            size={24}
            color={Colors[currentTheme].icon}
          />
        </View>
      </View>
    </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    flex: 1,
    height: 250,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

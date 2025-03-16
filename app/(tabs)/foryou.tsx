import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const { currentTheme } = useTheme();
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors[currentTheme].background }]}>
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

function LibraryScreen() {
  const { currentTheme } = useTheme();
  return (
    <ThemedView style={styles.screenContainer}>
      <ThemedText style={{ color: Colors[currentTheme].text }}>Library</ThemedText>
    </ThemedView>
  );
}

function LikedScreen() {
  const { currentTheme } = useTheme();
  return (
    <ThemedView style={styles.screenContainer}>
      <ThemedText style={{ color: Colors[currentTheme].text }}>Liked</ThemedText>
    </ThemedView>
  );
}

function SuggestedScreen() {
  const { currentTheme } = useTheme();
  return (
    <ThemedView style={styles.screenContainer}>
      <ThemedText style={{ color: Colors[currentTheme].text }}>Suggested</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
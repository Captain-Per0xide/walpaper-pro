import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const { currentTheme } = useTheme();

  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: Colors[currentTheme].tint,
        tabBarInactiveTintColor: Colors[currentTheme].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[currentTheme].background,
          borderTopColor: Colors[currentTheme === 'dark' ? 'light' : 'dark'].background,
          borderTopWidth: 0.2,
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="foryou"
        options={{
          title: 'For You',
          tabBarIcon: ({ color }) => <Feather name="heart" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="feed" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

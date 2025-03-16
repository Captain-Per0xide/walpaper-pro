import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { useTheme } from "@/context/ThemeContext";

export default function Account() {
    const { theme, currentTheme, setTheme } = useTheme();
    
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Colors[currentTheme].background }]}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={[styles.headerTitle, { color: Colors[currentTheme].text }]}>Account</Text>
            </View>

            {/* Sign In Section */}
            <View style={styles.section}>
                <TouchableOpacity 
                    style={[styles.googleButton, { backgroundColor: Colors[currentTheme].button }]}
                    onPress={() => {
                        // Implement Google Sign In
                    }}
                >
                    <Ionicons name="logo-google" size={24} color={currentTheme === 'light' ? 'white' : 'black'} />
                    <Text style={[styles.buttonText, { color: currentTheme === 'light' ? 'white' : 'black' }]}>
                        Sign in with Google
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Settings Section */}
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: Colors[currentTheme].text }]}>Settings</Text>
                
                {/* Theme Options */}
                <View style={styles.settingGroup}>
                    <Text style={[styles.settingTitle, { color: Colors[currentTheme].text }]}>Theme</Text>
                    <View style={styles.themeOptions}>
                        <TouchableOpacity 
                            style={[
                                styles.themeButton,
                                { 
                                    backgroundColor: Colors[currentTheme].button,
                                    opacity: theme === 'system' ? 1 : 0.7
                                }
                            ]}
                            onPress={() => setTheme('system')}
                        >
                            <Ionicons name="phone-portrait" size={20} color={currentTheme === 'light' ? 'white' : 'black'} />
                            <Text style={[styles.themeButtonText, { color: currentTheme === 'light' ? 'white' : 'black' }]}>System</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.themeButton,
                                { 
                                    backgroundColor: Colors[currentTheme].button,
                                    opacity: theme === 'light' ? 1 : 0.7
                                }
                            ]}
                            onPress={() => setTheme('light')}
                        >
                            <Ionicons name="sunny" size={20} color={currentTheme === 'light' ? 'white' : 'black'} />
                            <Text style={[styles.themeButtonText, { color: currentTheme === 'light' ? 'white' : 'black' }]}>Light</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.themeButton,
                                { 
                                    backgroundColor: Colors[currentTheme].button,
                                    opacity: theme === 'dark' ? 1 : 0.7
                                }
                            ]}
                            onPress={() => setTheme('dark')}
                        >
                            <Ionicons name="moon" size={20} color={currentTheme === 'light' ? 'white' : 'black'} />
                            <Text style={[styles.themeButtonText, { color: currentTheme === 'light' ? 'white' : 'black' }]}>Dark</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* About Section */}
            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: Colors[currentTheme].text }]}>About</Text>
                <TouchableOpacity style={styles.aboutItem}>
                    <Text style={[styles.aboutText, { color: Colors[currentTheme].text }]}>Privacy Policy</Text>
                    <Ionicons name="chevron-forward" size={24} color={Colors[currentTheme].text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.aboutItem}>
                    <Text style={[styles.aboutText, { color: Colors[currentTheme].text }]}>Terms of Service</Text>
                    <Ionicons name="chevron-forward" size={24} color={Colors[currentTheme].text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.aboutItem}>
                    <Text style={[styles.aboutText, { color: Colors[currentTheme].text }]}>Version 1.0.0</Text>
                    <Ionicons name="information-circle-outline" size={24} color={Colors[currentTheme].text} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '600',
    },
    section: {
        padding: 16,
        gap: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
        gap: 12,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    settingGroup: {
        gap: 12,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    themeOptions: {
        flexDirection: 'row',
        gap: 12,
    },
    themeButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        gap: 8,
    },
    themeButtonText: {
        fontSize: 14,
        fontWeight: '500',
    },
    aboutItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    aboutText: {
        fontSize: 16,
    },
});
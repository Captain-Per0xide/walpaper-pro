import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/constants/Colors';

export default function UserLogo() {
    const { currentTheme } = useTheme();

    const logoColor = currentTheme === 'light' ? Colors.light.tabIconDefault : Colors[currentTheme].tint;
    const borderColor = currentTheme === 'light' ? 'black' : 'white';

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <TouchableOpacity 
                    style={[
                        styles.logoContainer, 
                        { backgroundColor: logoColor }
                    ]}
                >
                    <FontAwesome 
                        name="user" 
                        size={24} 
                        color={Colors[currentTheme].background}
                    />
                    <View style={[
                        styles.editIconContainer,
                        { 
                            backgroundColor: Colors[currentTheme].background,
                            borderColor: borderColor
                        }
                    ]}>
                        <FontAwesome 
                            name="pencil" 
                            size={12} 
                            color={logoColor}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        alignItems: 'center',
    },
    logoWrapper: {
        position: 'relative',
    },
    logoContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIconContainer: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
}); 
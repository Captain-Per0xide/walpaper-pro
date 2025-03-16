import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, useColorScheme } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
type DownloadPictureProps = {
  pictureOpen: boolean;
  onClose: () => void;
  wallpaper: Wallpaper;
};

export const DownloadPicture: React.FC<DownloadPictureProps> = ({ pictureOpen, onClose, wallpaper }) => {
  const { currentTheme } = useTheme();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (pictureOpen) {
      bottomSheetRef.current?.expand();
    }
  }, [pictureOpen]);

  if (!pictureOpen) return null;

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={2}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height:0}}
        backgroundStyle={{ backgroundColor: Colors[currentTheme].background }}
        handleStyle={{ backgroundColor: Colors[currentTheme].background }}
      >
        <View style={{flexDirection:"row", justifyContent:"space-between", position:"absolute", top:0, width:"100%", zIndex: 1, padding: 16}}>
          <Ionicons 
            onPress={onClose}
            style={[
              styles.iconButton,
              { backgroundColor: Colors[currentTheme === 'light' ? 'dark' : 'light'].text }
            ]} 
            name="close" 
            size={28} 
            color={Colors[currentTheme].text} 
          />
          <View style={{flexDirection:"row", gap:10}}>
            <MaterialIcons  
              style={[
                styles.iconButton,
                { backgroundColor: Colors[currentTheme === 'light' ? 'dark' : 'light'].text }
              ]} 
              name="favorite-outline" 
              size={28} 
              color={Colors[currentTheme].text} 
            />
            <Feather  
              style={[
                styles.iconButton,
                { backgroundColor: Colors[currentTheme === 'light' ? 'dark' : 'light'].text }
              ]} 
              name="share" 
              size={28} 
              color={Colors[currentTheme].text} 
            />
          </View>
        </View>
        <BottomSheetView style={[
          styles.contentContainer,
          { backgroundColor: Colors[currentTheme].background }
        ]}>
          <Image 
            source={{ uri: wallpaper.url }} 
            style={[styles.previewImage, { resizeMode: 'cover' }]}
          />
          <Text style={[styles.title, { color: Colors[currentTheme].text }]}>
            {wallpaper.name}
          </Text>
          <TouchableOpacity 
            style={[
              styles.downloadButton, 
              { backgroundColor: Colors[currentTheme].button }
            ]}
          >
            <Ionicons name="download" size={24} color={currentTheme === 'light' ? 'white' : 'black'} />
            <Text style={[styles.downloadText, { color: currentTheme === 'light' ? 'white' : 'black' }]}>
              Get Wallpaper
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentContainer: {
    flex: 1,
    padding: 7,
    alignItems: 'center',
    paddingTop: 60,
  },
  previewImage: {
    width: '100%',
    height: 400,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 16,
  },
  downloadButton: {
    flexDirection: 'row',
    gap: 8,
    width: '70%',
    height: 60,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadText: {
    fontSize: 20,
    fontWeight: '600',
  },
  iconButton: {
    borderRadius: 20,
    padding: 4,
  },
});


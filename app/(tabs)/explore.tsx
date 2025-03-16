import { DownloadPicture } from "@/components/DownloadPicture";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Explore(){
    const [pictureOpen, setPictureOpen] = useState(false);
    
    return (
            <SafeAreaView style={{ flex: 1 }}>
                <Button title="Open Bottom Sheet" onPress={() => setPictureOpen(true)} />
                {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)} />}
            </SafeAreaView>
        
    );
}
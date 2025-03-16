import { DownloadPicture } from "@/components/DownloadPicture";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore(){
    const [pictureOpen,setPictureOpen] = useState(false);
    return <SafeAreaView>
        <Button title="Open Bottom Sheet" onPress={() => setPictureOpen(true)} ></Button>
            {pictureOpen && <DownloadPicture />}
    </SafeAreaView>
}
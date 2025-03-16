import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Accounts(){
    return <View>
        <Text>Accounts Page</Text>
        <Link href="/accountinfo">Go to Account</Link>
    </View>
}
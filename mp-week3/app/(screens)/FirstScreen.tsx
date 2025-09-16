import {Text, View} from "react-native";
import "../global.css"

export default function FirstScreen() {
    return (
        <View className={"flex-1 items-center justify-center bg-blue-400"}>
          <View className={"w-40 h-40 rounded-full border-4 border-black mb-6"}/>
            <Text className={"text-4xl font-bold     uppercase break-all"}>grow your business</Text>
        </View>
    )
}

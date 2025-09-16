import {Text, TextInput, View} from "react-native";
import "./global.css"
import {Image} from "expo-image";
import {useState} from "react";

export default function Index() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <View className={"items-center flex-1 justify-center bg-blue-600 "}>
        <View className={"flex justify-center rounded-full border-4 border-black"}/>
        <Text className={"text-4xl font-bold uppercase break-all"}>grow your business</Text>
    </View>
  );
}

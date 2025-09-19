import {Text, View} from "react-native";

export default function Screen() {
    return (
        <View style={{flex: 1}}>
            <View style={{
                padding: 20,
                margin: 20,
                backgroundColor: "lightblue",
                borderRadius: 6,
                width: 600,
                minHeight: 400,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{color: "white", fontWeight: "bold"}}>Screen</Text>
            </View>
        </View>
    )
}

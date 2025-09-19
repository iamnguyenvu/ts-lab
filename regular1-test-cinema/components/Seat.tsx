import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface SeatProps {
    text: string;
    isSelected?: boolean;
    onPress?: () => void;
}

export default function Seat({text, isSelected, onPress}: SeatProps) {
    return (
        <TouchableOpacity
            style={[styles.seat, isSelected && styles.selected]}
            onPress={onPress}>
            <Text style={[isSelected && styles.text]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    seat: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        width: 40,
        height: 40,
        borderRadius: 4,
        margin: 4
    },
    selected: {
        backgroundColor: "red",
    },
    text: {
        fontWeight: "bold",
        color: "white",
    }
})

import {FlatList, StyleSheet, Text, View} from "react-native";
import Seat from "@/components/Seat";
import {useState} from "react";

interface SeatListProps {
    seats: string[];
}

export default function SeatList({seats}: SeatListProps) {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    const toggleSeat = (selected: string) => {
        setSelectedSeats((prev) =>
            prev.includes(selected) ?
                prev.filter(id => id !== selected)
                : [...prev, selected]
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={seats}
                renderItem={({item}) => (
                    <Seat text={item} isSelected={selectedSeats.includes(item)} onPress={() => toggleSeat(item)}/>
                )}
                keyExtractor={item => item}
                numColumns={8}
                style={{flex: 1}}
            />
            <View style={styles.inforWrapper}>
                <Text style={styles.infoText}>Tong so ghe: {seats.length}</Text>
                <Text style={styles.infoText}>So ghe da duoc dat: {selectedSeats.length}</Text>
                <Text style={styles.infoText}>So ghe con lai: {seats.length - selectedSeats.length}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inforWrapper: {
        flex: 1,
        alignItems: "flex-end"
    },
    infoText: {
        fontWeight: "bold",
        fontSize: 18,
    }
})
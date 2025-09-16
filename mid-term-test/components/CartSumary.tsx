import {Text, View} from "react-native";
import {useCart} from "@/components/CartContext";

export default function CartSumary() {
    const {totalQuantity, totalPrice} = useCart();

    return (
        <View style={{ padding: 12, borderWidth: 1, borderColor: "#eee", borderRadius: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>Cart</Text>
            <Text style={{ marginTop: 6 }}>Quantity: {totalQuantity}</Text>
            <Text>Total: {totalPrice.toLocaleString()} đ</Text>
        </View>
    )
}

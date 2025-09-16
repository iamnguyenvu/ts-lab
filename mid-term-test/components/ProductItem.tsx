import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";

interface ProductItemProps {
    title: string;
    price: number;
    img?: ImageSourcePropType;
    onAdd?: () => void;
}

export default function ProductItem({title, price, img, onAdd}: ProductItemProps) {
    return (
        <View style={{ padding: 20, borderWidth: 1, borderColor: '#ccc', marginBottom: 10, borderRadius: 10, flex: 1, alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>

            {img ? (
                <Image source={img} style={{ width: 120, height: 160, marginTop: 10, borderRadius: 8 }} />
            ) : null}
            <Text style={{ marginTop: 6, fontWeight: "bold", textAlign: "center" }}>{price.toLocaleString()} đ</Text>

            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "purple", paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8}}
                onPress={onAdd}
            >
                <Text style={{ color: "#fff", fontWeight: "700" }}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

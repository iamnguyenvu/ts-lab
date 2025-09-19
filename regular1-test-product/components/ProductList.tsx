import {FlatList, Text, View} from "react-native";
import ProductItem from "@/components/ProductItem";
import {useMemo, useState} from "react";
import {useCart} from "@/components/CartContext";

const books = [
    {
        id: "b1",
        title: "Atomic Habits",
        price: 29.99,
        img: require("../assets/images/hai-so-phan.png"),
    },
    {
        id: "b2",
        title: "The Power of Habit",
        price: 19.99,
        img: require("../assets/images/hai-so-phan.png"),
    }
    , {
        id: "b3",
        title: "Deep Work",
        price: 39.99,
        img: require("../assets/images/hai-so-phan.png"),
    }
]

export default function ProductList() {
    const data = useMemo(() => books, []);

    const {addToCart} = useCart();

    return (
        <View style={{flex: 1, padding: 20}}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <ProductItem title={item.title} price={item.price} img={item.img}
                                 onAdd={() => addToCart({id: item.id, title: item.title, price: item.price})}/>
                    )
                }
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={true}
            />
        </View>
    )
}

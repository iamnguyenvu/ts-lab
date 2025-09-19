import { Text, View } from "react-native";
import ProductList from "@/components/ProductList";
import {CartProvider} from "@/components/CartContext";
import CartSumary from "@/components/CartSumary";

export default function Index() {
  return (
      <CartProvider>
          <View
              style={{
                  flex: 1
              }}
          >
              <View style={{padding: 16, alignItems: "center"}}>
                  <CartSumary />
              </View>
              <View style={{flex: 1}}>
                  <ProductList />
              </View>

          </View>
      </CartProvider>

  );
}

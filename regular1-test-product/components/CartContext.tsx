import {createContext, ReactNode, useContext, useMemo, useState} from "react";

export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

type CartState = {
    items: Record<string, CartItem>;
    addToCart: (p: {id: string, title: string, price: number}, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    setQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalQuantity: number;
    totalPrice: number;
}

const CartContext = createContext<CartState | null>(null);

export function CartProvider({children}: {children: ReactNode}) {
    const [items, setItems] = useState<Record<string, CartItem>>({});

    const addToCart = (p: { id: string, title: string, price: number }, quantity = 1) => {
        setItems((prev) => {
            const curr = prev[p.id];
            const nextQuantity = (curr?.quantity ?? 0) + quantity;
            return {
                ...prev,
                [p.id]: {id: p.id, title: p.title, price: p.price, quantity: nextQuantity},
            }
        })
    }

    const removeFromCart = (id: string) => {
        setItems((prev) => {
            const { [id]: _, ...rest } = prev;
            return rest;
        })
    }

    const setQuantity = (id: string, quantity: number) => {
        setItems((prev) => {
            if (quantity <= 0) {
                const { [id]: _, ...rest} = prev;
                return rest;
            }

            const item = prev[id];
            if(!item) return prev;
            return {...prev, [id]: {...item, quantity: quantity}}
        })
    }

    const clearCart = () => setItems({});

    const { totalQuantity, totalPrice } = useMemo(() => {
        const list = Object.values(items);
        const totalQuantity = list.reduce((s, i) => s + i.quantity, 0);
        const totalPrice = list.reduce((s, i) => s + i.quantity * i.price, 0);
        return {totalPrice, totalQuantity};
    }, [items]);

    const value: CartState = {
        items,
        addToCart,
        removeFromCart,
        setQuantity,
        clearCart,
        totalQuantity,
        totalPrice
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    const ctx = useContext(CartContext);
    if(!ctx) throw new Error("useCart() must be used within useCart()");
    return ctx;
};
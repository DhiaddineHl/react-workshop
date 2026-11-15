import { createContext, useContext, useState, type ReactNode } from "react";

// declare the types
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

interface ShopContextValue {
  cart: Cart;
  totalItems: number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  getQuantity: (id: number) => number;
}

// the products available in the shop
// eslint-disable-next-line react-refresh/only-export-components
export const products: Omit<CartItem, "quantity">[] = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

//create the context
const ShopContext = createContext<ShopContextValue | undefined>(undefined);

interface ShopProviderProps {
  children: ReactNode;
}

//create the provider : where the logic lives
export const ShopProvider = ({ children }: ShopProviderProps) => {
  const [cart, setCart] = useState<Cart>({
    items: products.map((product) => ({ ...product, quantity: 0 })),
  });

  const addToCart = (id: number) => {
    setCart((prev) => {
      const existingItem = prev.items.find((item) => item.id === id);
      if (!existingItem) return prev;

      return {
        ...prev,
        items: prev.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const existingItem = prev.items.find((item) => item.id === id);
      if (!existingItem || existingItem.quantity === 0) return prev;

      return {
        ...prev,
        items: prev.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      };
    });
  };

  const getQuantity = (id: number) =>
    cart.items.find((item) => item.id === id)?.quantity ?? 0;

  const totalItems = cart.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <ShopContext.Provider
      value={{ cart, totalItems, addToCart, removeFromCart, getQuantity }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

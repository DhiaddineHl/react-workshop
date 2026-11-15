import { create } from "zustand";

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

// the products available in the shop
export const products: Omit<CartItem, "quantity">[] = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

interface ShopState {
  cart: Cart;
  // derived values, recalculated by the store on every cart change
  totalItems: number;
  quantities: Record<number, number>; // product id -> quantity
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

// compute everything that depends on the cart in one place
const withDerived = (items: CartItem[]) => ({
  cart: { items },
  totalItems: items.reduce((total, item) => total + item.quantity, 0),
  quantities: Object.fromEntries(
    items.map((item) => [item.id, item.quantity]),
  ) as Record<number, number>,
});

// change one item's quantity by `delta`, never going below 0
const changeQuantity = (items: CartItem[], id: number, delta: number) =>
  items.map((item) =>
    item.id === id
      ? { ...item, quantity: Math.max(0, item.quantity + delta) }
      : item,
  );

// create the store: state + logic live here, no provider needed
export const useShopStore = create<ShopState>()((set) => ({
  // initialize the cart with all products at quantity 0
  ...withDerived(products.map((product) => ({ ...product, quantity: 0 }))),

  addToCart: (id) =>
    set((state) => {
      const existingItem = state.cart.items.find((item) => item.id === id);
      if (!existingItem) return state;

      return withDerived(changeQuantity(state.cart.items, id, 1));
    }),

  removeFromCart: (id) =>
    set((state) => {
      const existingItem = state.cart.items.find((item) => item.id === id);
      if (!existingItem || existingItem.quantity === 0) return state;

      return withDerived(changeQuantity(state.cart.items, id, -1));
    }),
}));

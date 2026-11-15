// import { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function App() {
  // const [cart, setCart] = useState<Cart>({ items: [] });

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Navbar cart={cart} /> */}
      <Navbar />
      <main className="flex-grow-1 d-flex flex-column">
        {/* <Shop cart={cart} setCart={setCart} /> */}
        <Shop />
      </main>
    </div>
  );
}

export default App;

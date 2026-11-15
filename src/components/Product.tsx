import React, { useState } from "react";
// import { Cart } from "../App";
// import { useShop } from "../contexts/ShopContext";
import { useShopStore } from "../stores/ShopStore";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  // cart: Cart;
  // setCart: (cart: Cart) => void;
}

const Product = ({ id, name, price }: ProductProps) => {
  const [count, setCount] = useState(0);

  // const { addToCart, removeFromCart, getQuantity } = useShop();

  // select only what this component needs from the store
  const addToCart = useShopStore((s) => s.addToCart);
  const removeFromCart = useShopStore((s) => s.removeFromCart);
  const quantity = useShopStore((s) => s.quantities[id] ?? 0);

  // const addToCart = (id: number) => {
  //   const existingItem = cart.items.find((item) => item.id === id);
  //   if (existingItem) {
  //     setCart({
  //       ...cart,
  //       items: cart.items.map((item) =>
  //         item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
  //       ),
  //     });
  //   } else {
  //     setCart({
  //       ...cart,
  //       items: [...cart.items, { id, name, price, quantity: 1 }],
  //     });
  //   }
  // };

  // const removeFromCart = (id: number) => {
  //   const existingItem = cart.items.find((item) => item.id === id);
  //   if (!existingItem) return;

  //   if (existingItem.quantity > 1) {
  //     setCart({
  //       ...cart,
  //       items: cart.items.map((item) =>
  //         item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
  //       ),
  //     });
  //   } else {
  //     setCart({
  //       ...cart,
  //       items: cart.items.filter((item) => item.id !== id),
  //     });
  //   }
  // };

  // const quantity = cart.items.find((item) => item.id === id)?.quantity ?? 0;

  return (
    <div className="col" key={id}>
      <div className="card h-100 border-0 shadow-sm">
        {/* Image placeholder */}
        <div
          className="card-img-top d-flex align-items-center justify-content-center bg-primary-subtle text-primary fs-1 fw-bold"
          style={{ height: 160 }}
        >
          {name.charAt(0)}
        </div>

        <div className="card-body d-flex flex-column">
          <h3 className="h5 card-title mb-1">{name}</h3>
          <p className="fs-5 fw-semibold text-primary mb-3">
            ${price.toFixed(2)}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="text-muted small">
              {/* Quantity: {getQuantity(id)} */}
              Quantity: {quantity}
            </span>
            <div
              className="btn-group"
              role="group"
              aria-label={`Change quantity of ${name}`}
            >
              <button
                type="button"
                className="btn btn-outline-primary px-3"
                aria-label={`Remove one ${name}`}
                onClick={() => removeFromCart(id)}
              >
                −
              </button>
              <button
                type="button"
                className="btn btn-primary px-3"
                aria-label={`Add one ${name}`}
                onClick={() => addToCart(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import { useState } from "react";
import Product from "./Product";
// import { Cart } from "../App";
import { products } from "../stores/ShopStore";

// const products = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
// ];

interface ProductsListProps {
  searchTerm: string;
  // cart: Cart;
  // setCart: (cart: Cart) => void;
}

const ProductsList = ({ searchTerm }: ProductsListProps) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          // cart={cart}
          // setCart={setCart}
        />
      ))}
    </div>
  );
};

export default ProductsList;

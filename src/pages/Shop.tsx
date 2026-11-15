import { useState } from "react";
import ProductsList from "../components/ProductsList";
import SearchInput from "../components/SearchInput";
// import { Cart } from "../App";

// interface ShopProps {
//   cart: Cart;
//   setCart: (cart: Cart) => void;
// }

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h1 className="h2 fw-bold mb-0">Shop</h1>
          <p className="text-muted mb-0">Browse our products</p>
        </div>
        <div style={{ minWidth: 280 }}>
          <SearchInput onChange={setSearchTerm} />
        </div>
      </div>

      {/* <ProductsList searchTerm={searchTerm} cart={cart} setCart={setCart} /> */}
      <ProductsList searchTerm={searchTerm} />
    </div>
  );
};

export default Shop;

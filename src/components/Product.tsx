import React, { useState } from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

const Product = ({ id, name, price }: ProductProps) => {
  const [count, setCount] = useState(0);

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
            <span className="text-muted small">Quantity: {count}</span>
            <div
              className="btn-group"
              role="group"
              aria-label={`Change quantity of ${name}`}
            >
              <button
                type="button"
                className="btn btn-outline-primary px-3"
                aria-label={`Remove one ${name}`}
                onClick={() => setCount((prev) => (prev ? prev - 1 : 0))}
              >
                −
              </button>
              <button
                type="button"
                className="btn btn-primary px-3"
                aria-label={`Add one ${name}`}
                onClick={() => setCount(count + 1)}
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

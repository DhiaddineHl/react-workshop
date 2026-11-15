import React from "react";

const countries = [
  { id: 1, name: "United States" },
  { id: 2, name: "Canada" },
  { id: 3, name: "Mexico" },
  { id: 4, name: "United Kingdom" },
  { id: 5, name: "Germany" },
  { id: 6, name: "France" },
];

const CountriesList = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item active" aria-current="true">
          An active item
        </li>
      </ul>
    </>
  );
};

export default CountriesList;

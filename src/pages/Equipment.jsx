import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Equipment() {
  const [listings, setListings] = useState([]);
  const [item, setItem] = useState("");

  const addListing = () => {
    setListings([...listings, item]);
    setItem("");
  };

  return (
    <div>
      <h1>Equipment Marketplace</h1>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter equipment (e.g., Tractor)"
      />
      <button onClick={addListing}>Add Listing</button>
      <ul>
        {listings.map((eq, i) => (
          <li key={i}>{eq}</li>
        ))}
      </ul>
    </div>
  );
}

export default Equipment;

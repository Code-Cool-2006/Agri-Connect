import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const CropPrices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    Papa.parse("/data/crop_prices.csv", {
      download: true,
      header: true, // use first row as keys
      complete: (results) => {
        // Filter and map relevant fields
        const filtered = results.data.map((row) => ({
          commodity: row.Commodity,
          market: row.Market,
          modalPrice: row["Modal Price"],
          maxPrice: row["Max Price"],
          minPrice: row["Min Price"],
        }));
        setPrices(filtered);
      },
    });
  }, []);

  return (
    <div className="crop-prices">
      <h2>📈 Today's Crop Prices</h2>
      <ul>
        {prices.slice(0, 20).map((p, idx) => (
          <li key={idx}>
            {p.commodity} ({p.market}): ₹{p.modalPrice}
            <span style={{ marginLeft: "0.5rem" }}>↑/↓</span>{" "}
            {/* placeholder for trend */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropPrices;

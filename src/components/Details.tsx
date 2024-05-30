import React, { useContext } from "react";
import Card from "./Card"; // Importing Card component
import ThemeContext from "../context/ThemeContext"; // Importing ThemeContext from context folder

// Defining the interface for stock details
interface StockDetails {
  name: string;
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  finnhubIndustry: string;
}

// Defining the interface for DetailsProps
interface DetailsProps {
  details: Partial<StockDetails>; // Accepts partial stock details
}

// Details component
const Details: React.FC<DetailsProps> = ({ details }) => {
  const { darkMode } = useContext(ThemeContext); // Using useContext hook to get darkMode from ThemeContext

  // Object containing labels for details
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  // Function to convert million to billion
  const convertMillionToBillion = (number: number) => (number / 1000).toFixed(2);

  return (
    <Card> {/* Rendering Card component */}
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {/* Iterating over detailsList object */}
        {Object.keys(detailsList).map((item) => (
          <li key={item} className="flex-1 flex justify-between items-center">
            <span>{detailsList[item]}</span> {/* Label */}
            <span className="font-bold">
              {/* Conditional rendering for marketCapitalization */}
              {item === "marketCapitalization"
                ? `${convertMillionToBillion(details[item] as number)}B` // Convert to billion if it's marketCapitalization
                : details[item]} {/* Render original value */}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Details;

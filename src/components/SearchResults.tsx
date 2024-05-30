import React, { useContext } from "react";
import StockContext from "../context/StockContext"; // Importing StockContext from context folder
import ThemeContext from "../context/ThemeContext"; // Importing ThemeContext from context folder

// Interface for SearchResultsProps
interface SearchResultsProps {
  results: any[]; // Accepts an array of any type
}

// SearchResults component
const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const { darkMode } = useContext(ThemeContext); // Using useContext hook to get darkMode from ThemeContext
  const { setStockSymbol } = useContext(StockContext); // Using useContext hook to get setStockSymbol from StockContext

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar"
      }`}
    >
      {/* Mapping over results to render list items */}
      {results.map((item) => (
        <li
          key={item.symbol} // Unique key for each list item
          className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
            darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200"
          } transition duration-300`}
          onClick={() => setStockSymbol(item.symbol)} // Setting stock symbol on click
        >
          <span>{item.symbol}</span> {/* Symbol */}
          <span>{item.description}</span> {/* Description */}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;

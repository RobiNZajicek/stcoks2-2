import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext"; // Importing ThemeContext from context folder
import StockContext from "../context/StockContext"; // Importing StockContext from context folder
import SearchResults from "./SearchResults"; // Importing SearchResults component
import { FcSearch } from "react-icons/fc"; // Importing FcSearch icon
import { RxCross2 } from "react-icons/rx"; // Importing RxCross2 icon
import { mockSearchResults } from "../constants/mock"; // Importing mockSearchResults from constants folder

const Search = () => {
  const { darkMode } = useContext(ThemeContext); // Using useContext hook to get darkMode from ThemeContext
  const { setStockSymbol, fetchStockDetails, fetchStockChart } = useContext(StockContext); // Using useContext hook to get setStockSymbol, fetchStockDetails, fetchStockChart from StockContext
  const [input, setInput] = useState(""); // State for input value
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result); // State for best matches
  const [error, setError] = useState(null); // State for error
  const [selectedCompany, setSelectedCompany] = useState(null); // State for selected company

  // Function to update best matches based on input
  const updateBestMatches = async () => {
    setBestMatches(
      mockSearchResults.result.filter((item) =>
        item.description.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  // Function to clear input and reset states
  const clear = () => {
    setInput("");
    setBestMatches([]);
    setError(null);
    setSelectedCompany(null);
  };

  // Function to handle company selection
  const handleSelect = async (symbol) => {
    setStockSymbol(symbol);
    await fetchStockDetails(symbol);
    await fetchStockChart(symbol);
    setSelectedCompany(symbol);
    clear();
  };

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      {/* Input field */}
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      
      {/* Clear input button */}
      {input && (
        <button onClick={clear} className="m-1">
          <RxCross2 className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      
      {/* Search button */}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8  rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-blue-400"
      >
        <FcSearch className="h-4 w-4 fill-gray-100" />
      </button>
      
      {/* Render search results if input and bestMatches exist */}
      {input && bestMatches.length > 0 && (
        <SearchResults results={bestMatches} onSelect={handleSelect} />
      )}
      
      {/* Render error message if error exists */}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default Search;

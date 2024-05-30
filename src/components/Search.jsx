import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import SearchResults from "./SearchResults";
import { FcSearch } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { mockSearchResults } from "../constants/mock";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol, fetchStockDetails, fetchStockChart } = useContext(StockContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);
  const [error, setError] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const updateBestMatches = async () => {
    setBestMatches(
      mockSearchResults.result.filter((item) =>
        item.description.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
    setError(null);
    setSelectedCompany(null);
  };

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
      {input && (
        <button onClick={clear} className="m-1">
          <RxCross2 className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8  rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-blue-400"
      >
        <FcSearch className="h-4 w-4 fill-gray-100" />
      </button>
      
      
      {input && bestMatches.length > 0 && (
        <SearchResults results={bestMatches} onSelect={handleSelect} />
      )}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default Search;

import React, { createContext, useState } from 'react';

const BoughtStocksContext = createContext();

export const BoughtStocksProvider = ({ children }) => {
  const [boughtStocks, setBoughtStocks] = useState([]);
  const [money, setMoney] = useState(10000); // Initial money, you can set it based on your requirement

  const addStock = (stock, price) => {
    setBoughtStocks((prevStocks) => [...prevStocks, { name: stock, price }]);
    setMoney((prevMoney) => prevMoney - price); // Deduct the stock price from the user's money
  };

  const removeStock = (stockToRemove) => {
    setBoughtStocks((prevStocks) => {
      const stock = prevStocks.find((s) => s.name === stockToRemove);
      if (stock) {
        setMoney((prevMoney) => prevMoney + stock.price); // Add the stock price to the user's money
        return prevStocks.filter((s) => s.name !== stockToRemove);
      }
      return prevStocks;
    });
  };

  return (
    <BoughtStocksContext.Provider value={{ boughtStocks, addStock, removeStock, money }}>
      {children}
    </BoughtStocksContext.Provider>
  );
};

export default BoughtStocksContext;
              
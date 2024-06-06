import React, { createContext, useState } from 'react';

const BoughtStocksContext = createContext();

export const BoughtStocksProvider = ({ children }) => {
  const [boughtStocks, setBoughtStocks] = useState([]);
  const [money, setMoney] = useState(0);

  const addStock = (stock, price) => {
    setBoughtStocks((prevStocks) => [...prevStocks, { name: stock, price }]);
  };

  const removeStock = (stockToRemove, currentPrice) => {
    setBoughtStocks((prevStocks) =>
      prevStocks.filter((stock) => {
        if (stock.name === stockToRemove) {
          setMoney((prevMoney) => prevMoney + (currentPrice - stock.price));
          return false;
        }
        return true;
      })
    );
  };

  return (
    <BoughtStocksContext.Provider value={{ boughtStocks, addStock, removeStock, money, setMoney }}>
      {children}
    </BoughtStocksContext.Provider>
  );
};

export default BoughtStocksContext;

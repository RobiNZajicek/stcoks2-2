import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import Overview from './Overview';
import Details from './Details';
import Chart from './Chart';
import Header from './Header';
import StockContext from '../context/StockContext';
import { Button } from '@mantine/core';
import { fetchStockDetails, fetchQuote, fetchHistoricalData } from '../utils/api/stock-api';
import BoughtStocksContext from '../context/BoughtStocksContext';

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const { addStock } = useContext(BoughtStocksContext);

  const [quote, setQuote] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const [stockDetails, setStockDetails] = useState({ name: '' });

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateQuote = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    const updateHistoricalData = async () => {
      try {
        const result = await fetchHistoricalData(stockSymbol);
        setHistoricalData(result);
      } catch (error) {
        setHistoricalData([]);
        console.log(error);
      }
    };

    updateStockDetails();
    updateQuote();
    updateHistoricalData();
  }, [stockSymbol]);

  const handleBuyStock = () => {
    if (stockDetails.name && quote.c) {
      addStock(stockDetails.name, quote.c);
    } else {
      console.error('Stock details or price are not available');
    }
  };

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'white'
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 w-full row-span-1 flex justify-start items-center">
        <Header className="w-96" name={stockDetails.name} />
        <Button className="ml-10 justify-center items-center mt-10" onClick={handleBuyStock}>
          Buy Stock
        </Button>
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart data={historicalData} />
      </div>
      <div>
        <Overview
          symbol={stockDetails.ticker || ''}
          price={quote.c || 0}
          change={quote.c - quote.pc || 0}
          changePercent={((quote.c - quote.pc) / quote.pc) * 100 || 0}
          currency={stockDetails.currency || ''}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;

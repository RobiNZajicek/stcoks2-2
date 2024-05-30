import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "./ChartFilter";
import Card from "./Card";
import { Area, XAxis, YAxis, ResponsiveContainer, AreaChart, Tooltip } from "recharts";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";
import { convertUnixTimestampToDate } from "../utils/helpers/date-helper";
import { chartConfig } from "../constants/config";
//chart Component
const Chart = () => {
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [data, setData] = useState([]);
  //fatching the data for the graph
  useEffect(() => {
    const fetchData = async () => {
      try {
        const historicalData = await fetchHistoricalData(stockSymbol, filter);
        setData(historicalData);
      } catch (error) {
        console.error("Error fetching historical data:", error);
      }
    };

    fetchData();
  }, [stockSymbol, filter]);
    //formating the data for the graph
  const formatData = (data) => {
    if (!Array.isArray(data.c)) {
      return [];
    }
    return data.c.map((closePrice, index) => {
      return {
        value: closePrice.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };
//returning chartFilter
  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"} stopOpacity={0.8} />
              <stop offset="95%" stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip contentStyle={darkMode ? { backgroundColor: "#111827" } : null} itemStyle={darkMode ? { color: "#818cf8" } : null} />
          <Area type="monotone" dataKey="value" stroke="#312e81" fill="url(#chartColor)" fillOpacity={1} strokeWidth={0.5} />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;

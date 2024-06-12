import React, { useContext, useEffect, useState } from "react";
import { Area, XAxis, YAxis, ResponsiveContainer, AreaChart, Tooltip } from "recharts";
import ChartFilter from "./ChartFilter";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";
import { convertUnixTimestampToDate } from "../utils/helpers/date-helper";
import { chartConfig } from "../constants/config";

const Chart = () => {
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [data, setData] = useState([]);

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

  const formatData = (data) => {
    if (!Array.isArray(data.c)) {
      return [];
    }
    return data.c.map((closePrice, index) => ({
      value: closePrice,
      date: convertUnixTimestampToDate(data.t[index]),
    }));
  };

  const formattedData = formatData(data);
  const lastPriceChange = formattedData.length > 1 ? formattedData[formattedData.length - 1].value - formattedData[0].value : 0;
  const isPricePositive = lastPriceChange >= 0;

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formattedData}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={isPricePositive ? "#34D399" : "#EF4444"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={isPricePositive ? "#34D399" : "#EF4444"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip contentStyle={darkMode ? { backgroundColor: "#111827" } : null} itemStyle={darkMode ? { color: "#818cf8" } : null} />
          <Area
            type="monotone"
            dataKey="value"
            stroke={isPricePositive ? "#34D399" : "#EF4444"}
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;

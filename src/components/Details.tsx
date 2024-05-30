import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

interface StockDetails {
  name: string;
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  finnhubIndustry: string;
}

interface DetailsProps {
  details: Partial<StockDetails>;
}

const Details: React.FC<DetailsProps> = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number: number) => (number / 1000).toFixed(2);

  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailsList).map((item) => (
          <li key={item} className="flex-1 flex justify-between items-center">
            <span>{detailsList[item]}</span>
            <span className="font-bold">
              {item === "marketCapitalization"
                ? `${convertMillionToBillion(details[item] as number)}B`
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Details;
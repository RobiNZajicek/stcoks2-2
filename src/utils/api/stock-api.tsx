// src/utils/api/stock-api.tsx

// Function to generate mock company details based on the symbol
// Function to generate mock company details based on the symbol
const generateMockCompanyDetails = (symbol: string) => {
  let companyDetails;
  switch (symbol) {
    case "AAPL":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "1980-12-12",
        marketCapitalization: 1415993,
        name: "Apple Inc",
        phone: "14089961010",
        shareOutstanding: 4375.47998046875,
        ticker: "AAPL",
        weburl: "https://www.apple.com/",
        logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
        finnhubIndustry: "Technology",
      };
      break;
    case "MSFT":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "1986-03-13",
        marketCapitalization: 2049792,
        name: "Microsoft Corporation",
        phone: "12062661000",
        shareOutstanding: 7580.05078125,
        ticker: "MSFT",
        weburl: "https://www.microsoft.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png",
        finnhubIndustry: "Technology",
      };
      break;
    case "AMZN":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "1997-05-15",
        marketCapitalization: 1547353,
        name: "Amazon.com Inc",
        phone: "12062606100",
        shareOutstanding: 500.64,
        ticker: "AMZN",
        weburl: "https://www.amazon.com/",
        logo: "https://static.finnhub.io/logo/af67e590-7e10-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Consumer Cyclical",
      };
      break;
    case "TSLA":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "2010-06-29",
        marketCapitalization: 834174,
        name: "Tesla Inc",
        phone: "16506805157",
        shareOutstanding: 963.33,
        ticker: "TSLA",
        weburl: "https://www.tesla.com/",
        logo: "https://static.finnhub.io/logo/8d8fbb10-7e10-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Automotive",
      };
      break;
    case "F":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1956-03-07",
        marketCapitalization: 46000,
        name: "Ford Motor Co",
        phone: "13133227000",
        shareOutstanding: 3980,
        ticker: "F",
        weburl: "https://www.ford.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Automotive",
      };
      break;
    case "SKODA":
      companyDetails = {
        country: "CZ",
        currency: "CZK",
        exchange: "PRG",
        ipo: "1993-04-12",
        marketCapitalization: 20000,
        name: "Skoda Auto",
        phone: "420800600000",
        shareOutstanding: 500,
        ticker: "SKODA",
        weburl: "https://www.skoda-auto.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Automotive",
      };
      break;
    case "NVDA":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "1999-01-22",
        marketCapitalization: 460000,
        name: "NVIDIA Corporation",
        phone: "14088005000",
        shareOutstanding: 2480,
        ticker: "NVDA",
        weburl: "https://www.nvidia.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Technology",
      };
      break;
    case "GOOGL":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "2004-08-19",
        marketCapitalization: 1200000,
        name: "Alphabet Inc",
        phone: "16502530000",
        shareOutstanding: 3300,
        ticker: "GOOGL",
        weburl: "https://www.abc.xyz/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Technology",
      };
      break;
    case "META":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "2012-05-18",
        marketCapitalization: 800000,
        name: "Meta Platforms Inc",
        phone: "16505435300",
        shareOutstanding: 2300,
        ticker: "META",
        weburl: "https://www.meta.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Technology",
      };
      break;
    case "UNH":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1984-10-01",
        marketCapitalization: 350000,
        name: "UnitedHealth Group Inc",
        phone: "19528950000",
        shareOutstanding: 950,
        ticker: "UNH",
        weburl: "https://www.unitedhealthgroup.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Healthcare",
      };
      break;
    case "JNJ":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1944-09-24",
        marketCapitalization: 400000,
        name: "Johnson & Johnson",
        phone: "17325240000",
        shareOutstanding: 2700,
        ticker: "JNJ",
        weburl: "https://www.jnj.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Healthcare",
      };
      break;
    case "PG":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1890-06-25",
        marketCapitalization: 330000,
        name: "Procter & Gamble Co",
        phone: "15139834000",
        shareOutstanding: 2400,
        ticker: "PG",
        weburl: "https://www.pg.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Consumer Defensive",
      };
      break;
    case "KO":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1919-09-05",
        marketCapitalization: 260000,
        name: "Coca-Cola Co",
        phone: "14048990000",
        shareOutstanding: 4300,
        ticker: "KO",
        weburl: "https://www.coca-cola.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Consumer Defensive",
      };
      break;
    case "PEP":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ",
        ipo: "1972-01-03",
        marketCapitalization: 240000,
        name: "PepsiCo Inc",
        phone: "19144094000",
        shareOutstanding: 1400,
        ticker: "PEP",
        weburl: "https://www.pepsico.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Consumer Defensive",
      };
      break;
    case "LLY":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1923-03-15",
        marketCapitalization: 280000,
        name: "Eli Lilly & Co",
        phone: "13174276000",
        shareOutstanding: 1100,
        ticker: "LLY",
        weburl: "https://www.lilly.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Healthcare",
      };
      break;
    case "DECK":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1993-10-28",
        marketCapitalization: 8000,
        name: "Deckers Outdoor Corp",
        phone: "18058245330",
        shareOutstanding: 300,
        ticker: "DECK",
        weburl: "https://www.deckers.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Consumer Cyclical",
      };
      break;
    case "GE":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1892-05-18",
        marketCapitalization: 110000,
        name: "GE Aerospace",
        phone: "16176850000",
        shareOutstanding: 900,
        ticker: "GE",
        weburl: "https://www.ge.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Industrials",
      };
      break;
    case "HWM":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "2020-04-01",
        marketCapitalization: 15000,
        name: "Howmet Aerospace Inc",
        phone: "14125305000",
        shareOutstanding: 400,
        ticker: "HWM",
        weburl: "https://www.howmet.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Industrials",
      };
      break;
    case "NEE":
      companyDetails = {
        country: "US",
        currency: "USD",
        exchange: "NYSE",
        ipo: "1925-03-17",
        marketCapitalization: 170000,
        name: "NextEra Energy Inc",
        phone: "15616940000",
        shareOutstanding: 1800,
        ticker: "NEE",
        weburl: "https://www.nexteraenergy.com/",
        logo: "https://static.finnhub.io/logo/8a30dfd0-7e0f-11ea-84a4-00000000092a.png",
        finnhubIndustry: "Utilities",
      };
      break;
    default:
      companyDetails = {
        country: "Unknown",
        currency: "Unknown",
        exchange: "Unknown",
        ipo: "Unknown",
        marketCapitalization: 0,
        name: "Unknown",
        phone: "Unknown",
        shareOutstanding: 0,
        ticker: symbol,
        weburl: "",
        logo: "",
        finnhubIndustry: "Unknown",
      };
      break;
      case "BAC":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NYSE",
    ipo: "1971-01-04",
    marketCapitalization: 400000,
    name: "Bank of America Corp",
    phone: "17044221000",
    shareOutstanding: 8600,
    ticker: "BAC",
    weburl: "https://www.bankofamerica.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Financial Services",
  };
  break;
case "JPM":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NYSE",
    ipo: "1980-01-02",
    marketCapitalization: 450000,
    name: "JPMorgan Chase & Co",
    phone: "12128013000",
    shareOutstanding: 3300,
    ticker: "JPM",
    weburl: "https://www.jpmorganchase.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Financial Services",
  };
  break;
case "HD":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NYSE",
    ipo: "1981-09-22",
    marketCapitalization: 400000,
    name: "The Home Depot Inc",
    phone: "14046882000",
    shareOutstanding: 1100,
    ticker: "HD",
    weburl: "https://www.homedepot.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Consumer Cyclical",
  };
  break;
  case "BA":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NYSE",
    ipo: "1934-01-01",
    marketCapitalization: 140000,
    name: "Boeing Co",
    phone: "12067487967",
    shareOutstanding: 570,
    ticker: "BA",
    weburl: "https://www.boeing.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Industrials",
  };
  break;
case "SBUX":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ",
    ipo: "1992-06-26",
    marketCapitalization: 130000,
    name: "Starbucks Corp",
    phone: "12066230001",
    shareOutstanding: 1300,
    ticker: "SBUX",
    weburl: "https://www.starbucks.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Consumer Cyclical",
  };
  break;
case "CSCO":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ",
    ipo: "1990-02-16",
    marketCapitalization: 200000,
    name: "Cisco Systems Inc",
    phone: "18004422746",
    shareOutstanding: 4400,
    ticker: "CSCO",
    weburl: "https://www.cisco.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Technology",
  };
  break;
case "ADBE":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ",
    ipo: "1986-08-14",
    marketCapitalization: 300000,
    name: "Adobe Inc",
    phone: "18004534753",
    shareOutstanding: 480,
    ticker: "ADBE",
    weburl: "https://www.adobe.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Technology",
  };
  break;
case "PYPL":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ",
    ipo: "2002-02-15",
    marketCapitalization: 300000,
    name: "PayPal Holdings Inc",
    phone: "14049785000",
    shareOutstanding: 1200,
    ticker: "PYPL",
    weburl: "https://www.paypal.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Technology",
  };
  break;
  case "V":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NYSE",
    ipo: "2008-03-19",
    marketCapitalization: 550000,
    name: "Visa Inc",
    phone: "14047620600",
    shareOutstanding: 1300,
    ticker: "V",
    weburl: "https://www.visa.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Financial Services",
  };
  break;
case "MA":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NYSE",
    ipo: "2006-05-25",
    marketCapitalization: 400000,
    name: "Mastercard Inc",
    phone: "18006227753",
    shareOutstanding: 1200,
    ticker: "MA",
    weburl: "https://www.mastercard.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Financial Services",
  };
  break;
case "WMT":
  companyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NYSE",
    ipo: "1970-08-25",
    marketCapitalization: 400000,
    name: "Walmart Inc",
    phone: "18009256278",
    shareOutstanding: 2800,
    ticker: "WMT",
    weburl: "https://www.walmart.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Consumer Defensive",
  };
  break;

  }
  return companyDetails;
};
// Function to generate mock historical data based on the symbol
const generateMockHistoricalData = (symbol: string) => {
  const prices = [];
  const basePrice = Math.floor(Math.random() * 200) + 100;
  
  // Adjust the range of random values based on the company
  let priceMultiplier = 1;
  switch(symbol) {
    case "AAPL":
      priceMultiplier = 5;
      break;
    case "MSFT":
      priceMultiplier = 3;
      break;
    // Add more cases for other companies as needed
    default:
      priceMultiplier = 1;
      break;
  }

  for (let i = 0; i < 30; i++) {
    prices.push(basePrice + Math.floor(Math.random() * 10 * priceMultiplier));
  }

  return {
    c: prices,
    h: prices.map((price) => price + Math.random() * 10), // High prices slightly above close prices
    l: prices.map((price) => price - Math.random() * 10), // Low prices slightly below close prices
    o: prices.map((price) => price + (Math.random() - 0.5) * 20), // Open prices slightly fluctuate around close prices
    s: "ok",
    t: Array.from({ length: 30 }, (_, i) => Math.floor(Date.now() / 1000) - i * 86400), // Timestamps for last 30 days
    v: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000000)), // Random volume data
  };
};

// Mock API functions
export const fetchStockDetails = async (symbol: string) => {
  // Simulate API call
  return generateMockCompanyDetails(symbol);
};

export const fetchQuote = async (symbol: string) => {
  // Simulate API call
  return { c: Math.floor(Math.random() * 500), pc: Math.floor(Math.random() * 500) }; // Random current and previous close prices
};

export const fetchHistoricalData = async (symbol: string, resolution: string, from: number, to: number) => {
  // Simulate API call
  return generateMockHistoricalData(symbol);
};

export const searchSymbol = async (query: string) => {
  // Simulate API call
  return {
    count: 32, // Changed to return 32 results
    result: [
      { description: "Apple Inc", displaySymbol: "AAPL", symbol: "AAPL", type: "Common Stock" },
      { description: "Microsoft Corporation", displaySymbol: "MSFT", symbol: "MSFT", type: "Common Stock" },
      { description: "Google", displaySymbol: "GOOGL", symbol: "GOOGL", type: "Common Stock" },
      { description: "Amazon.com Inc", displaySymbol: "AMZN", symbol: "AMZN", type: "Common Stock" },
      { description: "Tesla Inc", displaySymbol: "TSLA", symbol: "TSLA", type: "Common Stock" },
      { description: "Facebook Inc", displaySymbol: "FB", symbol: "FB", type: "Common Stock" },
      { description: "Alphabet Inc", displaySymbol: "GOOGL", symbol: "GOOGL", type: "Common Stock" },
      { description: "Johnson & Johnson", displaySymbol: "JNJ", symbol: "JNJ", type: "Common Stock" },
      { description: "Meta Platforms Inc", displaySymbol: "META", symbol: "META", type: "Common Stock" },
      { description: "Visa Inc", displaySymbol: "V", symbol: "V", type: "Common Stock" },
      { description: "Mastercard Inc", displaySymbol: "MA", symbol: "MA", type: "Common Stock" },
      { description: "Walmart Inc", displaySymbol: "WMT", symbol: "WMT", type: "Common Stock" },
      { description: "UnitedHealth Group Inc", displaySymbol: "UNH", symbol: "UNH", type: "Common Stock" },
      { description: "Procter & Gamble Co", displaySymbol: "PG", symbol: "PG", type: "Common Stock" },
      { description: "Coca-Cola Co", displaySymbol: "KO", symbol: "KO", type: "Common Stock" },
      { description: "PepsiCo Inc", displaySymbol: "PEP", symbol: "PEP", type: "Common Stock" },
      { description: "Eli Lilly & Co", displaySymbol: "LLY", symbol: "LLY", type: "Common Stock" },
      { description: "Deckers Outdoor Corp", displaySymbol: "DECK", symbol: "DECK", type: "Common Stock" },
      { description: "GE Aerospace", displaySymbol: "GE", symbol: "GE", type: "Common Stock" },
      { description: "Howmet Aerospace Inc", displaySymbol: "HWM", symbol: "HWM", type: "Common Stock" },
      { description: "NextEra Energy Inc", displaySymbol: "NEE", symbol: "NEE", type: "Common Stock" },
      { description: "Netflix Inc", displaySymbol: "NFLX", symbol: "NFLX", type: "Common Stock" },
      { description: "Walt Disney Co", displaySymbol: "DIS", symbol: "DIS", type: "Common Stock" },
      { description: "Salesforce.com Inc", displaySymbol: "CRM", symbol: "CRM", type: "Common Stock" },
      { description: "Bank of America Corp", displaySymbol: "BAC", symbol: "BAC", type: "Common Stock" },
      { description: "JPMorgan Chase & Co", displaySymbol: "JPM", symbol: "JPM", type: "Common Stock" },
      { description: "The Home Depot Inc", displaySymbol: "HD", symbol: "HD", type: "Common Stock" },
      { description: "Boeing Co", displaySymbol: "BA", symbol: "BA", type: "Common Stock" },
      { description: "Starbucks Corp", displaySymbol: "SBUX", symbol: "SBUX", type: "Common Stock" },
      { description: "Cisco Systems Inc", displaySymbol: "CSCO", symbol: "CSCO", type: "Common Stock" },
      { description: "Adobe Inc", displaySymbol: "ADBE", symbol: "ADBE", type: "Common Stock" },
      { description: "PayPal Holdings Inc", displaySymbol: "PYPL", symbol: "PYPL", type: "Common Stock" },
    ],
  };
};

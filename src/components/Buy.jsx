import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';

const Buy = ({ addStock }) => {
  const [name, setName] = useState('');
  

  const handleBuy = () => {
    setName(stockDetails.name);
    addStock(stockDetails.name);
    console.log(stockDetails.name);
  };

  return (
    <Button className="ml-10 justify-center items-center mt-10" onClick={handleBuy}>
      Buy Stock
    </Button>
  );
};

export default Buy;

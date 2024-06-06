import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css'; // Import CSS file for styling
import Logo from '../../assets/logo.png';
import Lottie from 'lottie-react';
import ITsos from '../../assets/Animation - 1716591462518.json';
import BoughtStocksContext from '../../context/BoughtStocksContext';
import { Button } from '@mantine/core';

const Profile = () => {
  const [user, setUser] = useState({ fullname: '', email: '', name: '', lastname: '', money: 0, userName: '', phoneNumber: '', gender: '' });
  const [initialMoney, setInitialMoney] = useState(0); // Store initial money separately
  const [sell, setSell] = useState(false); // Store initial money separately
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const [bad, setBad] = useState(false);
  const query = useQuery();
  const { boughtStocks, removeStock } = useContext(BoughtStocksContext);

  useEffect(() => {
    const fullname = query.get('fullname');
    const email = query.get('email');
    const name = query.get('name');
    const lastname = query.get('lastname');
    const initialMoneyValue = parseFloat(query.get('money') || 0); // Parse money as a float, default to 0 if not provided
    const userName = query.get('userName');
    const phoneNumber = query.get('phoneNumber');
    const gender = query.get('gender');

    // Calculate the total money based on the initial value and the sum of all stock prices
    const totalMoney = initialMoneyValue - boughtStocks.reduce((total, stock) => total + parseFloat(stock.price), 0);

    setUser({ fullname, email, name, lastname, money: totalMoney.toFixed(2), userName, phoneNumber, gender });
    setInitialMoney(initialMoneyValue);
  }, [query, boughtStocks]);

  const handleSellStock = (stock) => {
    // Calculate the updated money by subtracting the price of the sold stock
    const updatedMoney = parseFloat(user.money) + parseFloat(stock.price); // Add the sold stock price to user's money
    setUser({ ...user, money: updatedMoney.toFixed(2) });
    removeStock(stock.name);
    setSell(true)
  };

  const Price = () => {
    if (bad === true) {
      setBad(-712);
    } else if (bad === false) {
      setBad(2712);
    }
  };

  useEffect(() => {
    const updateStockPrices = () => {
      boughtStocks.forEach(stock => {
        const randomChange = Math.floor(Math.random() * (300 - 50 + 1) + 50); // Random change between 50 and 300
        const isPositiveChange = Math.random() < 0.5; // Randomly determine if the change is positive or negative
        const newPrice = isPositiveChange ? stock.price + randomChange : stock.price - randomChange; // Calculate new price

        // Update the stock price
        stock.price = newPrice;
      });
    };

    const intervalId = setInterval(updateStockPrices, 4000); // Update prices every 4 seconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, [boughtStocks]); // Trigger effect when boughtStocks changes

  return (
    <div id='profile-container' className='containerk'>
      <div class='main_bg'></div>
      <header>
        <div className='brandLogo'>
          {/* <figure>
            <img src={Logo} alt="logo" width="100px" height="100px" />
          </figure> */}
          <span>
            USER Profile<br />
            <span style={{ color: 'black', fontSize: '15px' }}>{user.fullname}</span>
          </span>
        </div>
      </header>

      <section className='userProfile card'>
        <div className='profile'>
          <figure>
            <Lottie animationData={ITsos} className='Prof' />
          </figure>
        </div>
      </section>

      <section className='work_skills card'>
        <div className='work'>
          <h1 className='headingos'>Stock</h1>
          <ul>
            {boughtStocks.map((stock, index) => (
              <div className='flex flex-row items-center gap-4' key={index}>
                <li className='font-bold text-black text-xl mt-2 mb-2' style={{ '--i': 0 }}>
                  {stock.name} - ${stock.price.toFixed(2)}
                </li>
                <Button
                  onPointerEnter={Price}
                  className='bg-red-600 h-8'
                  onClick={() => handleSellStock(stock)} // Pass the stock object to handleSellStock function
                >
                  Sell
                </Button>
              </div>
            ))}
          </ul>
        </div>

        <div className='skills'>
          <h1 className='headingos'>Market</h1>
          <ul>
            <li style={{ '--i': 0 }}>Stocks</li>
            <li style={{ '--i': 1 }}>Cryptocurrencies</li>
            <li style={{ '--i': 2 }}>Bonds</li>
            <li style={{ '--i': 3 }}>Real Estate</li>
          </ul>
        </div>
      </section>

      <section className='userDetails card'>
        <div className='userName'>
          <h1>{user.fullname}</h1>
          <div className='map'>
            <i className='ri-map-pin-fill ri'></i>
            <span></span>
          </div>
          <p style={{ marginTop: '0', marginBottom: '2rem' }}>Contact info</p>
        </div>

        <div className='rank'>
          <li className='ssas'>
            <h1 className='ssas'>Phone number:</h1>
            <span style={{ fontSize: '14px', fontWeight: 400 }} className='info'>
              {user.phoneNumber}
            </span>
          </li>
          <li className='ssas mb-6'>
            <h1 className='label'>E-mail:</h1>
            <span style={{ fontSize: '14px', fontWeight: 400 }} className='info'>
              {user.email}
            </span>
          </li>
          <h1 style={{ marginBottom: '4rem' }} className='heading'>
            Achievements
          </h1>
        </div>

        <div className='btns'>
          <ul>
            <li className='sendMsg'>
              <i className='ri-chat-4-fill ri'></i>
              <a href='#'>Send Message</a>
            </li>
            <li className='sendMsg active'>
              <i className='ri-check-fill ri'></i>
              <a href='#'>Contacts</a>
            </li>
            <li className='sendMsg'>
              <a href='#'>Report User</a>
            </li>
          </ul>
        </div>
      </section>

      <section className='timeline_about card'>
        <div className='tabs'>
          <ul>
            <li className='timeline'>
              <i className='ri-eye-fill ri'></i>
              <span>Timeline</span>
            </li>
            <li className='about active'>
              <i className='ri-user-3-fill ri'></i>
              <span>About</span>
            </li>
          </ul>
        </div>
        <div className='profile-container'></div>
        <div className='contact_Info'>
          <h1 className='headingos' style={{ color: 'grey', fontSize: '21px' }}>
            Information
          </h1>
          <ul style={{ margin: '0', paddingLeft: '0' }}>
            <li className='ssas'>
              <h1 className='label'>Name:</h1>
              <span className='info'>{user.name}</span>
            </li>
            <li className='ssas'>
              <h1 className='ssas'>Lastname:</h1>
              <span className='info'>{user.lastname}</span>
            </li>
            <li className='ssas'>
              <h1 className='label'>Username:</h1>
              <span className='info'>{user.userName}</span>
            </li>
            <li className='ssas mb-6'>
              <h1 className='label'>Gender :</h1>
              <span className='info'>{user.gender}</span>
            </li>
          </ul>
        </div>

        <div>
          <h1 className='headingos' style={{ color: 'grey', fontSize: '21px' }}>
            Finances
          </h1>
          <ul style={{ margin: '0', paddingLeft: '0' }}>
            <li style={{ padding: '1rem', paddingLeft: '0' }} className='ssas'>
              <h1 style={{ margin: '0', paddingLeft: '0' }}>Money:</h1>
              {sell ? <span>{user.money * 1.02}</span> : <span>{user.money * 1}</span>}

            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;

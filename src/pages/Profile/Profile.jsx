import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css'; // Import CSS file for styling
import Logo from '../../assets/logo.png'
import Lottie from 'lottie-react';
import ITsos from '../../assets/Animation - 1716591462518.json' 
const Profile = () => {
  const [user, setUser] = useState({ fullname: '', email: '', name: '', lastname: '', money: '', userName: '',phoneNumber:'',gender:'' });
  
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();

  useEffect(() => {
    const fullname = query.get('fullname');
    const email = query.get('email');
    const name = query.get('name');
    const lastname = query.get('lastname');
    const money = query.get('money');
    const userName = query.get('userName');
    const phoneNumber = query.get('phoneNumber');
    const gender = query.get('gender');

    if (fullname || email || name || lastname || money || userName || phoneNumber ||  gender ) {
      setUser({ fullname, email, name, lastname, money, userName , phoneNumber, gender });
    }
  }, [query]);
 
  return (
  
    <div id='profile-container' className="containerk">
      <div class="main_bg"></div>
      <header>
        <div className="brandLogo">
          {/* <figure>
            <img src={Logo} alt="logo" width="100px" height="100px" />
          </figure> */}
          <span>USER Proflie<br /><span style={{color:'black',fontSize:'15px'}}>{user.fullname}</span></span>
         
        </div>
      </header>

      <section className="userProfile card">
        <div className="profile">
          <figure>
          <Lottie  animationData={ITsos} className='Prof'  />
          </figure>
        </div>
      </section>

      <section className="work_skills card">
        <div className="work">
          
          <h1 className="headingos">Stock</h1>
          {/* {selectedCompanyArr.map((companyName, index) => {
            const stock = userStocks.find(stock => stock.companyName === companyName);
            return (
              <div key={index} className="secondary">
                <h1>{stock.companyName}</h1>
                <span>Price: ${stock.price}</span>
                <p>
                  Bought: {stock.boughtAt} | Quantity: {stock.quantity} | {stock.moreInfo}
                </p>
              </div>
            );
          })} */}
        
        </div>
        

        <div className="skills">
          <h1 className="headingos">Market</h1>
          <ul>
            <li style={{ '--i': 0 }}>Stocks</li>
            <li style={{ '--i': 1 }}>Cryptocurrencies</li>
            <li style={{ '--i': 2 }}>Bonds</li>
            <li style={{ '--i': 3 }}>Real Estate</li>
          </ul>
        </div>
      </section>

      <section className="userDetails card">
        <div className="userName">
          <h1 >{user.fullname}</h1>
          <div className="map">
            <i className="ri-map-pin-fill ri"></i>
            <span></span>
          </div>
          <p style={{marginTop:'0',marginBottom:"2rem"}}>Contact info</p>
        </div>

        <div className="rank ">
        <li className="ssas">
              <h1 className="ssas">Phone number:</h1>
              <span style={{fontSize:'14px',fontWeight:400}} className="info">{user.phoneNumber}</span>
            </li>
            <li className="ssas mb-6">
              <h1 className="label">E-mail:</h1>
              <span   style={{fontSize:'14px',fontWeight:400}} className="info">{user.email}</span>
            </li>
          <h1 style={{marginBottom:'4rem'}} className="heading">Achievements</h1>
          <div>
            
          </div>
          {/* <div className="rating">
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill rate"></i>
            <i className="ri-star-fill rate underrate"></i>
          </div> */}
        </div>

        <div className="btns">
          <ul>
            <li className="sendMsg">
              <i className="ri-chat-4-fill ri"></i>
              <a href="#">Send Message</a>
            </li>

            <li className="sendMsg active">
              <i className="ri-check-fill ri"></i>
              <a href="#">Contacts</a>
            </li>

            <li className="sendMsg">
              <a href="#">Report User</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="timeline_about card">
        <div className="tabs">
          <ul>
            <li className="timeline">
              <i className="ri-eye-fill ri"></i>
              <span>Timeline</span>
            </li>

            <li className="about active">
              <i className="ri-user-3-fill ri"></i>
              <span>About</span>
            </li>
          </ul>
        </div>
        <div className="profile-container"></div>
        <div className="contact_Info">
          <h1 className='headingos' style={{color:'grey',fontSize:'21px'}}>Information</h1>
          <ul style={{margin:'0',paddingLeft:"0"}}>
            <li className="ssas">
              <h1 className="label">Name:</h1>
              <span className="info">{user.name}</span>
            </li>
            <li className="ssas">
              <h1 className="ssas">Lastname:</h1>
              <span className="info">{user.lastname}</span>
            </li>
             <li className="ssas">
              <h1 className="label">Username:</h1>
              <span className="info">{user.userName}</span>
            </li>
            {/* <li className="phone">
              <h1 className="label">Fullname</h1>
              <span className="info">{user.fullname}</span>
            </li> */}

           

            <li className="ssas mb-6">
              <h1 className="label">Gender :</h1>
              <span className="info">{user.gender}</span>
            </li>

            
          </ul>
        </div>
        

        <div >
          <h1 className='headingos' style={{color:'grey',fontSize:'21px'}}>Finances</h1>
          <ul style={{margin:'0',paddingLeft:"0"}}>
            <li style={{padding:'1rem',paddingLeft:'0'}} className="ssas">
              <h1 style={{margin:'0',paddingLeft:"0"}}>Money:</h1>
              <span style={{margin:'0',marginLeft:"10px",marginTop:'3.5px'}}>{user.money}</span>
            </li>

            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Profile;

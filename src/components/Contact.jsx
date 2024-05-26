import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Contactos from '../assets/Animation - 1716642869807.json'
import Lottie from 'lottie-react'
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import './Contact.css'
import tick2 from '../assets/tick2.svg'

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showExitAnimation, setShowExitAnimation] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_xkosvep', 'template_rlyq2lg', formRef.current, {
  //       publicKey: 'FjHR19_UwmBrW35Gr',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         // Reset form fields by setting input values to empty string
  //         if (formRef.current) {
  //           formRef.current.user_name.value = '';
  //           formRef.current.user_email.value = '';
  //           formRef.current.user_description.value = '';
  //         }
  //         setShowPopup(true); // Show the popup on success
  //         setTimeout(() => {
  //           setShowExitAnimation(true); // Trigger exit animation after delay
  //           setTimeout(() => {
  //             setShowPopup(false); // Hide the popup after exit animation
  //             setShowExitAnimation(false); // Reset exit animation state
  //           }, 500); // Adjust this duration to match exit animation duration
  //         }, 3000); // Adjust this to match your desired duration
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  const popupVariants = {
    hidden: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2.5rem', overflow: 'hidden',padding:"0 25rem" }}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} style={{ flex: '0.5', backgroundColor: 'white', padding: '2rem', borderRadius: '1rem' }}>
        <p style={{ marginBottom: '1rem', fontWeight: 'bold', color: '#6b7280', textAlign: 'left' }}>GET IN TOUCH</p>
        <h3 style={{ fontWeight: '900', color: 'black', fontSize: '2rem', textAlign: 'left' }}>CONTACT</h3>

        <form style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'black', fontWeight: '500', marginBottom: '1rem' }}>Name</span>
            <input
              type='text'
              name='user_name'
              placeholder="Your name"
              style={{ backgroundColor: 'white', padding: '1rem', color: 'black', borderRadius: '0.5rem', outline: 'none',  fontWeight: '500' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'black', fontWeight: '500', marginBottom: '1rem' }}>Email</span>
            <input
              type='email'
              name='user_email'
              placeholder="Your email"
              style={{ backgroundColor: 'white', padding: '1rem', color: 'black', borderRadius: '0.5rem', outline: 'none', fontWeight: '500' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'black', fontWeight: '500', marginBottom: '1rem' }}>Description</span>
            <textarea
              rows={7}
              name="user_description"
              placeholder="How can we help you?"
              style={{ backgroundColor: 'white', padding: '1rem', color: 'black', borderRadius: '0.5rem', outline: 'none',  fontWeight: '500',height:'200px',alignItems:"start",display:'flex', border:'2px solid black'}}
            />
          </label>

          <button type='submit' style={{ backgroundColor: '#228be6', padding: '0.75rem 2rem', borderRadius: '0.5rem', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '40px' }}>
            Send
          </button>

          {showPopup && (
            <motion.div
              key="popup" // Add key for proper animation on unmount/remount
              className="popup"
              id="popup"
              variants={popupVariants}
              initial="hidden"
              animate={showExitAnimation ? "exit" : "visible"} // Trigger exit animation if showExitAnimation is true
              onAnimationComplete={() => {
                if (showExitAnimation) {
                  setShowPopup(false); // Hide the popup after exit animation
                  setShowExitAnimation(false); // Reset exit animation state
                }
              }}
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={tick2} alt="Success" style={{ width: '50px', height: '50px' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>Thank you!</h2>
            </motion.div>
          )}
        </form>
      </motion.div>

      <motion.div className="img-div" variants={slideIn("right", "tween", 0.2, 1)} style={{ flex: 1, height: 'auto', maxHeight: '550px' }}>
        <Lottie style={{ marginRight: '2rem',marginTop:"15rem" }} animationData={Contactos} />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

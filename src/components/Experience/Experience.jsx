import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import './Experience.css';
import "react-vertical-timeline-component/style.min.css";

// Importing necessary data and utilities
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion.js";

// Component for each experience card
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'url(https://cdn.scopicsoftware.com/wp-content/uploads/2023/05/section-3-bckground-3.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "black",
        boxShadow:"1px 1px 30px 2px black",
       
      }}
      contentArrowStyle={{ borderRight: "10px solid  #228be6" }}
      date={<span style={{ fontWeight: 'bold', color: '#a4c7fe' }}>{experience.date}</span>}
      iconStyle={{ background: 'url(https://cdn.scopicsoftware.com/wp-content/uploads/2023/05/section-3-bckground-3.png)' }}
      icon={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
          <span
            src={experience.icon}
            alt={experience.company_name}
            style={{ width: '60%', height: '60%', objectFit: 'contain' }}
          />
        </div>
      }
    >
      <div>
        <h3 style={{ color: '#60a5fa', fontSize: '34px', fontWeight: 'extrabold' ,marginTop:"-15px",marginLeft:"-5px"}}>{experience.title}</h3>
        <h2
          style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}
        >
          {experience.company_name}
        </h2>
      </div>

      <ul style={{ marginTop: '1px', marginLeft: '20px', lineHeight: '2' }}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            style={{
              fontSize: '16px',
              fontWeight:'600',
            
              paddingLeft: '-10px',
              letterSpacing: 'wider',
            }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Main Experience component
const Experience = () => {
  return (
    <section style={{ margin: '0 auto', padding: '40px 16px', maxWidth: '1200px', backgroundColor: 'white' }}>
      <motion.div className="dsd" variants={textVariant()}>
        <p style={{ fontSize: '25px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: 'wider',color:'#93c5fd',fontWeight:'500'  }}>
          EVERYTHING ABOUT THE APP
        </p>
        {/* <h2 style={{ fontSize: '45px', color: 'black', textAlign: 'center',fontWeight:'extrabold' }}>
          STOCK-APP
        </h2> */}
      </motion.div>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        <div className="bluros">

        </div>
        <VerticalTimeline className="vertical-timeline" >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");

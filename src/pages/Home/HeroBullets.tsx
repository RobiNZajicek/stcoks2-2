import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import classes from './HeroBullets.module.css';
import Lottie from 'lottie-react';
import ITs from '../../assets/Animation - 1716560128361.json'
import Experience from '../../components/Experience/Experience.jsx'
import Contact from "../../components/Contact.jsx"
export function HeroBullets() {
  const apiKey = import.meta.env.REACT_APP_API_KEY;
  
  return (
    <div style={{display:'flex',flexDirection:'column',marginTop:'8.5rem'}}>
      
    <Container  >
      <div className={classes.inner}>
        <div className={classes.content}>
        <Title className={classes.title}>
            A <span className={classes.highlight}>cutting-edge</span> Stocks <br /> app for Traders
          </Title>
          <Text c="dimmed" mt="md">
            {apiKey}
            Experience the future of stock trading with our intuitive and powerful web application,
            designed to provide you with all the tools you need for successful trading.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Real-time Data</b> – Stay updated with live market data and never miss an
              opportunity.
            </List.Item>
            <List.Item>
              <b>Advanced Analytics</b> – Utilize comprehensive analytical tools to make informed
              trading decisions.
            </List.Item>
            <List.Item>
              <b>User-Friendly Interface</b> – Navigate effortlessly through our app with an
              intuitive and seamless user experience.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <div className={classes.imgDiv}>
        <Lottie  animationData={ITs} className={classes.image} />
        </div>
       
      </div>
    </Container>
    <div className=''>
              <Experience/>
              <Contact/>
              </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import Logo from '../../assets/logo.png'
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

const collections = [
  {  label: 'Profile', labelos: '/' },
  {  label: 'Stocks', labelos: 'Stocks' },
  { label: 'Home', labelos: 'Home' },
  {  label: 'Tools', labelos: 'Tools' },
  // { label: 'Achievements', labelos: 'Achievements' },
  // { label: 'Shop', labelos: 'Shop' },
  {  label: 'News', labelos: 'News' },
  {  label: 'Portfolio', labelos: 'Portfolio' },

];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const [userK, setUserK] = useState({
    name: '',
    email: '',
    fullname: '',
    lastname: '',
    money: '',
    userName: '',
    phoneNumber:'',
    gender:"",
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
  });

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
  
    setUserK((prevUserK) => ({
      ...prevUserK,
      name: name || prevUserK.name,
      email: email || prevUserK.email,
      fullname: fullname || prevUserK.fullname,
      lastname: lastname || prevUserK.lastname,
      money: money || prevUserK.money,
      userName: userName || prevUserK.userName,
      phoneNumber: phoneNumber || prevUserK.phoneNumber,
      gender: gender || prevUserK.gender
    }));
  }, []); // Empty dependency array to run the effect only once
  
  
  

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    setLoading(true);
    // Redirect to localhost:8080/login
    window.location.href = 'http://localhost:8080/login';
  };
  const handleDelete = () => {
    setLoading(true);
    // Redirect to localhost:8080/login
    window.location.href = 'http://localhost:8080/registration';
  };
  const collectionLinks = collections.map((collection) => (
    <Link
      to={{
        pathname: collection.labelos,
        search: `?fullname=${userK.fullname}&email=${userK.email}&name=${userK.name}&lastname=${userK.lastname}&money=${userK.money}&userName=${userK.userName}&phoneNumber=${userK.phoneNumber}&gender=${userK.gender}`,
      }}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}></span>{' '}
      {collection.label}
    </Link>
  ));

  return (
    <Box >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
         <span><img src={Logo} style={{height:'90px',position:'absolute',top:'1%',left:'1%',marginTop:'-1.5rem'}} alt="" /></span>

          <Group h="100%" gap={0} visibleFrom="sm">
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                
                  <Center inline>
                  <div className={classes.collections}>{collectionLinks}</div>
                  <Link to="Shop"><Box className={classes.collectionLink}  component="span" >
                      About Project
                    </Box></Link>
                    
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
               
              </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            
          </Group>

          <Group visibleFrom="sm">
            <Button onClick={handleLogout} variant="default">Log in</Button>
            <Button  onClick={handleDelete}>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

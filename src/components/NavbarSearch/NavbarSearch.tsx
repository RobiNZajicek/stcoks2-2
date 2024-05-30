import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  Avatar,    
  Menu,
  ActionIcon,
  Tooltip,
  rem,

} from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

import { IconBulb, IconUser, IconCheckbox, IconSearch, IconPlus } from '@tabler/icons-react';
// import { UserButton } from '../UserButton/UserButton';
import { useEffect } from 'react';
import cx from 'clsx';
import classes from './NavbarSearch.module.css';
import {
IconLogout,

IconSettings,
IconPlayerPause,
IconTrash,
IconSwitchHorizontal,
IconChevronDown,
} from '@tabler/icons-react';
import { useState } from 'react';
const links = [
  { icon: IconBulb, label: 'Activity', notifications: 3 },
  { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
  { icon: IconUser, label: 'Contacts' },
];




const collections = [
  { emoji: '💸', label: 'Profile',labelos: '/' },
  { emoji: '📈', label: 'Stocks',labelos: 'Stocks' },
  { emoji: '🏠', label: 'Home',labelos: 'Home' },
  { emoji: '🛠️', label: 'Tools',labelos: 'Tools' },
  { emoji: '✨', label: 'Achievements',labelos: 'Achievements' },
  { emoji: '🛒', label: 'Shop',labelos: 'Shop' },
  { emoji: '📅', label: 'Events',labelos: 'Events' },
  { emoji: '👨‍💼', label: 'Portfolio',labelos: 'Portfolio' },
  { emoji: '👨‍💼', label: 'userrdm',labelos: 'AddUser' },
];


export function NavbarSearch() {
 
  const [userK, setUserK] = useState({
    name: '',
    email: '',
    fullname: '',
    lastname: '',
    money: '',
    userName: '',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
  });
  

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
  
    setUserK((prevUserK) => ({
      ...prevUserK,
      name: name || prevUserK.name,
      email: email || prevUserK.email,
      fullname: fullname || prevUserK.fullname,
      lastname: lastname || prevUserK.lastname,
      money: money || prevUserK.money,
      userName: userName || prevUserK.userName,
    }));
  }, [query]);
  
 

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <Link
      to={{
        pathname: collection.labelos,
        search: `?fullname=${userK.fullname}&email=${userK.email}&name=${userK.name}&lastname=${userK.lastname}&money=${userK.money}&userName=${userK.userName}`,
      }}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
      {collection.label}
    </Link>
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
  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <Menu
          
          width={260}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
            >
              <Group className={classes.div} gap={15}>
                <Avatar className={classes.image} src={userK.image} alt={userK.name} radius="xl" size={20} />
                <Text fw={500} size="sm" lh={1} mr={3}>
                  {userK.name}
                </Text>
                <IconChevronDown style={{ width: rem(12), height: rem(12),color:'white',fill:'white',marginLeft:"-10px",marginTop:'1px' }} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            
            
           

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Account settings
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Change account
            </Menu.Item>
            <Menu.Item onClick={handleLogout} disabled={loading}>
            <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            Logout
        </Menu.Item>


            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item
              leftSection={
                <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Pause subscription
            </Menu.Item>
            <Menu.Item
            onClick={handleDelete}
              color="red"
              leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            >
              Delete account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>

      <TextInput
  placeholder="Search"
  size="xs"
  leftSection={<IconSearch style={{ width: rem(12), height: rem(12), color: '#fff' }} stroke={1.5} />}
  rightSectionWidth={70}
  rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
  styles={{
    input: { color: '#fff', backgroundColor: '#000', border: 'none' },
    section: { pointerEvents: 'none' },
  }}
  mb="sm"
/>

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text style={{color:'white'}} size="xs" fw={500} >
            Collections
          </Text>
          <Tooltip   label="Create collection" withArrow position="right">
            <ActionIcon style={{backgroundColor:'#228be6',color:'white' }} variant="default" size={18}>
              <IconPlus style={{ width: rem(12), height: rem(12),backgroundColor:'#228be6',color:'white',fill:'white', }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
      {/* <div className={classes.footer}>
      <a href="#" className={classes.link} onClick={ (event) => event.preventDefault()}>
        <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
        <span>Change account</span>
      </a>

      <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
        <IconLogout className={classes.linkIcon} stroke={1.5} />
        <span>Logout</span>
      </a>
    </div> */}
    
    </nav>
  );
}
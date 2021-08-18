import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './assets/w-logo.png';

import InfoIcon from '@material-ui/icons/Info';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import VideocamIcon from '@material-ui/icons/Videocam';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
      backgroundColor: '#36454F',
      height: '60px',
      position: 'relative'
  },
  logo: {
      width: '50px',
      position: 'absolute',
      right: '30px',
      top:'5px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItemText: {
    marginLeft: 20,
    marginRight: 150,
  }
  
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScrollToSection = (id) => {
    setAnchorEl(null);
    setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      }, 100);
  }

  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <IconButton 
                edge="start"
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                onClick = {handleClick}
            >
            <MenuIcon />
            </IconButton>
            <img src={Logo} alt="" className={classes.logo}/>
        </Toolbar>
        </AppBar>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
        >
            <MenuItem onClick={() => {handleScrollToSection('about-section')}}>
                <InfoIcon/>
                <p className={classes.menuItemText} >About</p>
            </MenuItem>
            <MenuItem onClick={() => {handleScrollToSection('services-section')}}>
                <RoomServiceIcon/>
                <p className={classes.menuItemText} >Services</p>
            </MenuItem>
            <MenuItem onClick={() => {handleScrollToSection('videos-section')}}>
                <VideocamIcon/>
                <p className={classes.menuItemText} >Videos</p>
            </MenuItem>
            <MenuItem onClick={() => {handleScrollToSection('shop-section')}}>
                <AddShoppingCartIcon/>
                <p className={classes.menuItemText} >Shop</p>
            </MenuItem>
            <MenuItem onClick={() => {handleScrollToSection('contact-section')}}>
                <ContactSupportIcon/>
                <p className={classes.menuItemText} >Contact</p>
            </MenuItem>
        </Menu>
    </div>
  );
}
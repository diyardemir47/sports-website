import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, SportsSoccer as SportsSoccerIcon, SportsBasketball as SportsBasketballIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Image } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const menuItems = [
    { to: '/', label: 'Anasayfa', icon: SportsSoccerIcon },
    { to: '/genel', label: 'Genel', icon: SportsBasketballIcon },
    { to: '/futbol', label: 'Futbol', icon: SportsSoccerIcon },
    { to: '/istatistikler', label: 'İstatistikler', icon: SportsSoccerIcon }, // Yeni menü öğesi
    { to: '/sponsors', label: 'Sponsorlarımız', icon: SportsBasketballIcon },
    { to: '/contact', label: 'İletişim', icon: SportsBasketballIcon },
  ];

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Image src={logo} alt="Berax Sport Logo" style={{ height: '50px', marginRight: '10px' }} />
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: '#333',
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.to}
                  onClick={handleMenuClose}
                  component={Link}
                  to={item.to}
                  className={`menu-item ${location.pathname === item.to ? 'active-menu-item' : ''}`}
                >
                  <item.icon style={{ marginRight: '8px' }} />
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            {menuItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={Link}
                to={item.to}
                className={`menu-item ${location.pathname === item.to ? 'active-menu-item' : ''}`}
              >
                {item.label}
              </Button>
            ))}
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <Button color="inherit" className="menu-item">Giriş Yap</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  appBar: {
    background: 'linear-gradient(to right, #040404, #c97a18)',
  },
};

export default Header;

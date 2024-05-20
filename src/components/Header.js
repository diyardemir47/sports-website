import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Futbol ikonu
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'; // Basketbol ikonu
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball'; // Voleybol ikonu
import SportsTennisIcon from '@mui/icons-material/SportsTennis'; // Tenis ikonu
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('/');
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'white', fontWeight:'bold', textDecoration:'none' }}>
          <SportsSoccerIcon style={{ marginRight: '8px', color: 'white',marginTop:'1px' }} /> Berax Sport
        </Typography>
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
                  backgroundColor: '#333', // Siyah arkaplan rengi
                },
              }}
            >
              <MenuItem 
                onClick={handleMenuClose} 
                component={Link} 
                to="/" 
                style={{ color: 'white' }}
                onMouseEnter={() => setActivePage('/')}
              >
                <SportsSoccerIcon style={{ marginRight: '8px' }} />
                Futbol
              </MenuItem>
              <MenuItem 
                onClick={handleMenuClose} 
                component={Link} 
                to="/" 
                style={{ color: 'white' }}
                onMouseEnter={() => setActivePage('/basketball')}
              >
                <SportsBasketballIcon style={{ marginRight: '8px' }} />
                Basketbol
              </MenuItem>
              <MenuItem 
                onClick={handleMenuClose} 
                component={Link} 
                to="/" 
                style={{ color: 'white' }}
                onMouseEnter={() => setActivePage('/volleyball')}
              >
                <SportsVolleyballIcon style={{ marginRight: '8px' }} />
                Voleybol
              </MenuItem>
              <MenuItem 
                onClick={handleMenuClose} 
                component={Link} 
                to="/" 
                style={{ color: 'white' }}
                onMouseEnter={() => setActivePage('/tennis')}
              >
                <SportsTennisIcon style={{ marginRight: '8px' }} />
                Tenis
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/services" style={{ color: 'white' }}>Hizmetlerimiz</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/sponsors" style={{ color: 'white' }}>Sponsorlarımız</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact" style={{ color: 'white' }}>İletişim</MenuItem>
              <MenuItem onClick={handleMenuClose} style={{ color: 'white' }}>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
                Giriş Yap
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <IconButton color="inherit">
              <SportsSoccerIcon />
            </IconButton>
            <IconButton color="inherit">
              <SportsBasketballIcon />
            </IconButton>
            <IconButton color="inherit">
              <SportsVolleyballIcon />
            </IconButton>
            <IconButton color="inherit">
              <SportsTennisIcon />
            </IconButton>
            <Button 
              color="inherit" 
              component={Link} 
              to="/" 
              style={{ color: 'white', backgroundColor: activePage === '/' ? '#333' : 'transparent' }}
              onMouseEnter={() => setActivePage('/')}
            >
              Anasayfa
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/services" 
              style={{ color: 'white', backgroundColor: activePage === '/services' ? '#333' : 'transparent' }}
              onMouseEnter={() => setActivePage('/services')}
            >
              Hizmetlerimiz
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/sponsors" 
              style={{ color: 'white', backgroundColor: activePage === '/sponsors' ? '#333' : 'transparent' }}
              onMouseEnter={() => setActivePage('/sponsors')}
            >
              Sponsorlarımız
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contact" 
              style={{ color: 'white', backgroundColor: activePage === '/contact' ? '#333' : 'transparent' }}
              onMouseEnter={() => setActivePage('/contact')}
            >
              İletişim
            </Button>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <Button color="inherit" style={{ color: 'white' }}>Giriş Yap</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

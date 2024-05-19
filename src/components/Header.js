import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Spor Web Sitesi
        </Typography>
        <Button color="inherit" component={Link} to="/">Anasayfa</Button>
        <Button color="inherit" component={Link} to="/services">Hizmetlerimiz</Button>
        <Button color="inherit" component={Link} to="/sponsors">Sponsorlarımız</Button>
        <Button color="inherit" component={Link} to="/contact">İletişim</Button>
        <Button color="inherit">Giriş Yap</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

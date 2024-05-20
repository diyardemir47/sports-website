import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 4 }}>
      <Grid container spacing={4}>
        {/* Pages Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Sayfalar
          </Typography>
          <Link href="/" color="inherit" underline="none" display="block">
            Anasayfa
          </Link>
          <Link href="/services" color="inherit" underline="none" display="block">
            Hizmetlerimiz
          </Link>
          <Link href="/sponsors" color="inherit" underline="none" display="block">
            Sponsorlarımız
          </Link>
          <Link href="/contact" color="inherit" underline="none" display="block">
            İletişim
          </Link>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Adres
          </Typography>
          <Typography variant="body2">
            123 Spor Caddesi
          </Typography>
          <Typography variant="body2">
            34567 Spor Şehri, Spor Ülkesi
          </Typography>
          <Typography variant="body2">
            Telefon: (123) 456-7890
          </Typography>
        </Grid>

        {/* Categories Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Kategoriler
          </Typography>
          <Link href="/category/fitness" color="inherit" underline="none" display="block">
            Fitness
          </Link>
          <Link href="/category/nutrition" color="inherit" underline="none" display="block">
            Beslenme
          </Link>
          <Link href="/category/training" color="inherit" underline="none" display="block">
            Antrenman
          </Link>
          <Link href="/category/equipment" color="inherit" underline="none" display="block">
            Ekipman
          </Link>
        </Grid>
      </Grid>
      <Box mt={4}>
        <hr/>
        <Typography variant="body2" color="text.secondary" align="center" style={{
          color:'white', fontSize:19, fontFamily:'Poetsen One'
        }}>
          © 2024 BERAX SPORT
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;

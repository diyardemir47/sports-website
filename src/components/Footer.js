import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Spor Web Sitesi
      </Typography>
    </Box>
  );
}

export default Footer;

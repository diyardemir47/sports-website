import React from 'react';
import { Box, Grid } from '@mui/material';
import SportsCarousel from './SportCarousel';

const someImages = [
  { label: 'General Sports 1', imgPath: 'https://picsum.photos/id/1/200/300' },
  { label: 'General Sports 2', imgPath: 'https://picsum.photos/id/1/200/300' },
  // Add more images
];

const footballImages = [
  { label: 'Football 1', imgPath: 'https://picsum.photos/id/1/200/300' },
  { label: 'Football 2', imgPath: 'https://picsum.photos/id/1/200/300' },
  // Add more images
];

const basketballImages = [
  { label: 'Basketball 1', imgPath: 'https://picsum.photos/id/1/200/300' },
  { label: 'Basketball 2', imgPath: 'https://picsum.photos/id/1/200/300' },
  // Add more images
];

function CarouselContainer() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <SportsCarousel
  images={someImages} // Burada someImages, bir dizi olmalı ve içinde resimlerin bilgilerini içermelidir
  title="Some Title" // Burada "Some Title", bir metin dizesi olmalıdır
/>

        </Grid>
        <Grid item container direction="column" spacing={2} xs={12} md={4}>
          <Grid item>
            <SportsCarousel images={footballImages} title="Football News" />
          </Grid>
          <Grid item style={{background:'black'}}>
            <SportsCarousel images={basketballImages} title="Basketball News" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CarouselContainer;

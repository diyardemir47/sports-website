import React from 'react';
import { Box, Typography } from '@mui/material';

const featuredAthletes = [
    { name: 'Lionel Messi', sport: 'Futbol', imageUrl: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg' },
    { name: 'LeBron James', sport: 'Basketbol', imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/230523093708-01-lebron-james-052223.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp' },
    { name: 'Serena Williams', sport: 'Tenis', imageUrl: 'https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2022-09/Serena-Williams-Square.jpg?itok=LRLv0UKI' },
    { name: 'Simone Biles', sport: 'Jimnastik', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/simone-biles-celebrates-after-placing-first-in-the-floor-news-photo-1693236365.jpg?crop=0.949xw:0.633xh;0.0170xw,0.0465xh&resize=980:*' },
    { name: 'Cristiano Ronaldo', sport: 'Futbol', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' },
    { name: 'Michael Jordan', sport: 'Basketbol', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg' },
    { name: 'Rafael Nadal', sport: 'Tenis', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-982701222.jpg?resize=1200:*' },
    { name: 'Usain Bolt', sport: 'Atletizm', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg/1200px-Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg' },
    { name: 'Tiger Woods', sport: 'Golf', imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/golf/players/full/462.png&w=350&h=254' },
    { name: 'Tom Brady', sport: 'Amerikan Futbolu', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tom_Brady_2019.jpg/266px-Tom_Brady_2019.jpg' },
    
  ];

function FeaturedAthletes() {
  return (
    <Box sx={styles.container}>
      {featuredAthletes.map((athlete, index) => (
        <Box key={index} sx={styles.athleteCard}>
          <img src={athlete.imageUrl} alt={athlete.name} style={styles.athleteImage} />
          <Typography variant="h6">{athlete.name}</Typography>
          <Typography variant="body2">{athlete.sport}</Typography>
        </Box>
      ))}
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    padding: '10px 0',
  },
  athleteCard: {
    textAlign: 'center',
    padding: 2,
    borderRadius: 4,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '150px',
    display: 'inline-block', // Inline block to align items horizontally
    marginRight: '10px', // Space between cards
  },
  athleteImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: 1,
  },
};

export default FeaturedAthletes;

import React, { useState } from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import './AthleteModal.css'; // Import CSS file for modal styling
import AthleteModal from './AthleteModal';

const featuredAthletes = [
  { name: 'Lionel Messi', sport: 'Futbol', birthplace: 'Rosario, Argentina', age: 34, team: 'Paris Saint-Germain', imageUrl: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg', cw: ['7x Ballon d\'Or winner', '4x UEFA Champions League winner', '10x La Liga winner'] },
  { name: 'LeBron James', sport: 'Basketbol', birthplace: 'Akron, Ohio, USA', age: 36, team: 'Los Angeles Lakers', imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/230523093708-01-lebron-james-052223.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp', cw: ['4x NBA Champion', '4x NBA MVP', '2x Olympic Gold Medalist'] },
  { name: 'Serena Williams', sport: 'Tenis', birthplace: 'Saginaw, Michigan, USA', age: 40, team: 'Retired', imageUrl: 'https://www.womenshistory.org/sites/default/files/styles/main_image/public/images/2022-09/Serena-Williams-Square.jpg?itok=LRLv0UKI', cw: ['23x Grand Slam singles titles', '4x Olympic Gold Medalist'] },
  { name: 'Simone Biles', sport: 'Jimnastik', birthplace: 'Columbus, Ohio, USA', age: 25, team: 'United States', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/simone-biles-celebrates-after-placing-first-in-the-floor-news-photo-1693236365.jpg?crop=0.949xw:0.633xh;0.0170xw,0.0465xh&resize=980:*', cw: ['4x Olympic Gold Medalist', '19x World Champion'] },
  { name: 'Cristiano Ronaldo', sport: 'Futbol', birthplace: 'Funchal, Portugal', age: 37, team: 'Al Nassr', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg', cw: ['5x Ballon d\'Or winner', '5x UEFA Champions League winner', '7x league titles winner'] },
  { name: 'Michael Jordan', sport: 'Basketbol', birthplace: 'Brooklyn, New York, USA', age: 59, team: 'Retired', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg', cw: ['6x NBA Champion', '5x NBA MVP', '2x Olympic Gold Medalist'] },
  { name: 'Rafael Nadal', sport: 'Tenis', birthplace: 'Manacor, Spain', age: 35, team: 'Spain', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-982701222.jpg?resize=1200:*', cw: ['20x Grand Slam singles titles', 'Olympic Gold Medalist'] },
  { name: 'Usain Bolt', sport: 'Atletizm', birthplace: 'Sherwood Content, Jamaica', age: 35, team: 'Retired', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg/1200px-Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg', cw: ['8x Olympic Gold Medalist', '11x World Champion'] },
  { name: 'Tiger Woods', sport: 'Golf', birthplace: 'Cypress, California, USA', age: 46, team: 'United States', imageUrl: 'https://a.espncdn.com/combiner/i?img=/i/headshots/golf/players/full/462.png&w=350&h=254', cw: ['15x Major Championships winner', 'PGA Tour all-time wins leader'] },
  { name: 'Tom Brady', sport: 'Amerikan Futbolu', birthplace: 'San Mateo, California, USA', age: 44, team: 'Tampa Bay Buccaneers', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tom_Brady_2019.jpg/266px-Tom_Brady_2019.jpg', cw: ['7x Super Bowl Champion', '5x Super Bowl MVP'] },
];

function FeaturedAthletes() {
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  const handleOpenModal = (athlete) => {
    setSelectedAthlete(athlete);
  };

  const handleCloseModal = () => {
    setSelectedAthlete(null);
  };

  return (
    <Box sx={styles.container}>
      {featuredAthletes.map((athlete, index) => (
        <Box
          key={index}
          sx={styles.athleteCard}
          onClick={() => handleOpenModal(athlete)}
        >
          <img src={athlete.imageUrl} alt={athlete.name} style={styles.athleteImage} />
          <Typography variant="h6">{athlete.name}</Typography>
          <Typography variant="body2">{athlete.sport}</Typography>
        </Box>
      ))}
      {selectedAthlete && (
        <AthleteModal
          open={Boolean(selectedAthlete)}
          onClose={handleCloseModal}
          athlete={selectedAthlete}
        />
      )}
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
    display: 'inline-block',
    marginRight: '10px',
    cursor: 'pointer', // Add cursor pointer to indicate it's clickable
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
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import SportsCarousel from '../screens/SportCarousel';
import FootballFixtures from '../screens/FootballFixtures';
import GoalKings from '../screens/GoalKings';
import NewsTicker from '../screens/NewsTicker';
import CategoryCard from '../screens/CategoryCard';
import AnnouncementComponent from '../screens/AnnouncementComponent';

const categories = [
  { title: 'Futbol', description: 'Futbol ile ilgili en son haberler ve maç özetleri.', imageUrl: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Futbol' },
  { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300/3498db/FFFFFF?text=Voleybol' },
  { title: 'Basketbol', description: 'Basketbol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300/2ecc71/FFFFFF?text=Basketbol' },
  { title: 'Tenis', description: 'Tenis turnuvaları ve oyuncu bilgileri.', imageUrl: 'https://via.placeholder.com/300/e74c3c/FFFFFF?text=Tenis' },
];

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.container}>
        <AnnouncementComponent />
      <Box sx={styles.fullWidth}>
      {!isMobile && <Box sx={styles.margin} />} {/* Adding spacing only on non-mobile devices */}
        <NewsTicker />
      </Box>
      {!isMobile && <Box sx={styles.spacing} />} {/* Adding spacing only on non-mobile devices */}
      <Box sx={styles.fullWidth}>
        <SportsCarousel />
      </Box>
      {!isMobile && <Box sx={styles.spacing} />} {/* Adding spacing only on non-mobile devices */}
      <hr />
      <Box sx={styles.section}>
        <div style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </Box>
      <Box sx={styles.fullWidth}>

</Box>

    </Box>
  );
}

const styles = {
  container: {
    padding: 5,
    
  },
  fullWidth: {
    width: '100%',
  },
  section: {
    marginBottom: 0,
    width: '100%',
    
    
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    padding: 24,
    backgroundColor: '#eaeaea',

  },
  cardContainer: {
    flex: 1,
    padding: 24,
  },
  spacing: {
    margin: '280px 0', // Adding margin to create space
  },
  
};

export default Home;

// src/components/Home.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import SportsCarousel from '../screens/SportCarousel';
import FootballStandings from '../screens/FootballStandings';
import FootballFixtures from '../screens/FootballFixtures';
import GoalKings from '../screens/GoalKings';
import NewsTicker from '../screens/NewsTicker';
import CategoryCard from '../screens/CategoryCard';

const categories = [
  { title: 'Futbol', description: 'Futbol ile ilgili en son haberler ve maç özetleri.', imageUrl: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Futbol' },
  { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300/3498db/FFFFFF?text=Voleybol' },
  { title: 'Basketbol', description: 'Basketbol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300/2ecc71/FFFFFF?text=Basketbol' },
  { title: 'Tenis', description: 'Tenis turnuvaları ve oyuncu bilgileri.', imageUrl: 'https://via.placeholder.com/300/e74c3c/FFFFFF?text=Tenis' },
];


function Home() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.fullWidth}>
        <NewsTicker />
      </Box>
      <Box sx={styles.fullWidth}>
        <SportsCarousel />
      </Box>
      <hr />
      <Box sx={styles.section}>
        <div style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </Box>
      <Box sx={styles.section}>
        <FootballStandings />
      </Box>
      <Box sx={styles.section}>
        <FootballFixtures />
      </Box>
      <Box sx={styles.section}>
        <GoalKings />
      </Box>
    </Box>
  );
}



const styles = {
  container: {
    padding: 5,
  },
  section: {
    marginBottom: 40,
    width: '100%'
  },
  fullWidth: {
    width: '100%'
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
  }
};

export default Home;

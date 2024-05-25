import React from 'react';
import { Box, useMediaQuery, useTheme, Typography } from '@mui/material';
import FootballFixtures from '../screens/FootballFixtures';
import GoalKings from '../screens/GoalKings';
import NewsTicker from '../screens/NewsTicker';
import CategoryCard from '../screens/CategoryCard';
import AnnouncementComponent from '../screens/AnnouncementComponent';

import FeaturedAthletes from '../screens/FeaturedAthletes';
import LiveMatches from '../screens/LiveMatches';
import SportsRecords from '../screens/SportsRecords';
import Carousel from '../screens/Carousel';

const categories = [
  { title: 'Futbol', description: 'Futbol ile ilgili en son haberler ve maç özetleri.', imageUrl: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=Futbol' },
  { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300/3498db/FFFFFF?text=Voleybol' },
  { title: 'Basketbol', description: 'Basketbol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300/2ecc71/FFFFFF?text=Basketbol' },
  { title: 'Tenis', description: 'Tenis turnuvaları ve oyuncu bilgileri.', imageUrl: 'https://via.placeholder.com/300/e74c3c/FFFFFF?text=Tenis' },
];

const sportsNews = [
  { 
    title: 'Son Futbol Haberleri', 
    content: 'Futbol dünyasından en son haberler ve gelişmeler.', 
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/1099/1099672.png' 
  },
  { 
    title: 'Basketbol Güncellemeleri', 
    content: 'Basketbol ligi ve turnuvalarından en güncel haberler.', 
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/1041/1041168.png' 
  },
  { 
    title: 'Voleybol Maç Sonuçları', 
    content: 'Voleybol maç sonuçları ve analizler.', 
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/5496/5496293.png' 
  },
  { 
    title: 'Tenis Turnuva Haberleri', 
    content: 'Tenis turnuvaları ve oyuncular hakkında bilgiler.', 
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/523/523686.png' 
  },
];

const largeCarouselImages = [
  {
    label: 'Major Sports Event',
    imgPath: 'https://static.javatpoint.com/gk/images/major-sports-events-in-the-world1.jpg',
    
  },
  {
    label: 'Major Sports Event',
    imgPath: 'https://static.javatpoint.com/gk/images/major-sports-events-in-the-world3.jpg',
  },
  {
    label: 'Major Sports Event',
    imgPath: 'https://static.javatpoint.com/gk/images/major-sports-events-in-the-world1.jpg',
    
  },
  {
    label: 'Major Sports Event',
    imgPath: 'https://cdn.bleacherreport.net/images_root/slides/photos/000/373/647/SUPER-BOWL-XLIV_original.jpg?1283400380',
    
  },
  // Add more images...
];

const smallCarouselImages1 = [
  {
    label: 'Basketball Highlights',
    imgPath: 'https://i.ytimg.com/vi/Hu146YAYAgo/maxresdefault.jpg',
  },
  {
    label: 'Basketball Highlights',
    imgPath: 'https://e0.365dm.com/23/12/768x432/skysports-basketball-nba-suns_6379365.jpg',
  },
  // Add more images...
];

const smallCarouselImages2 = [
  {
    label: 'Tennis Moments',
    imgPath: 'https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/0110f7ac12eb1924/1e924e786097/v/b251b62878f1/nadal-djokovic.png',
  },
  {
    label: 'Tennis Moments',
    imgPath: 'https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/1217ad0d783508e4/ce1d8cd70f52/v/ab244bf0ff49/nadal-federer.png',
  },
  {
    label: 'Tennis Moments',
    imgPath: 'https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/fbcf2d785d738985/0a069a1e8baa/v/27cdc1eb73db/djokovic-federer.png',
  },
  // Add more images...
];



function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.container}>
      <AnnouncementComponent />
      <Box sx={styles.fullWidth}>
        {!isMobile && <Box sx={styles.spacing} />} {/* Adding spacing only on non-mobile devices */}
        <NewsTicker />
      </Box>
      {!isMobile && <Box sx={styles.spacing} />} {/* Adding spacing only on non-mobile devices */}
      <hr />
      <Box sx={styles.section}>
        <Typography variant="h4" component="h2" gutterBottom>
          Spor Haberleri
        </Typography>
        <Box sx={isMobile ? styles.mobileCarouselContainer : styles.carouselContainer}>
          <Box sx={styles.largeCarousel}>
            <Carousel images={largeCarouselImages} maxWidth={600} height={400} />
          </Box>
          <Box sx={isMobile ? styles.mobileSmallCarousels : styles.smallCarousels}>
            <Carousel images={smallCarouselImages1} maxWidth={300} height={200} />
            <Carousel images={smallCarouselImages2} maxWidth={300} height={200} />
          </Box>
        </Box>
        <Box sx={styles.newsContainer}>
          {sportsNews.map((news, index) => (
            <Box key={index} sx={styles.newsItem}>
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                style={isMobile ? styles.mobileImage : styles.webImage} 
              />
              <Typography variant="h6" component="h3">
                {news.title}
              </Typography>
              <Typography variant="body1">
                {news.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={styles.fullWidth}>
        <hr />
      </Box>
      <Box sx={styles.section}>
        <Typography variant="h4" component="h2" gutterBottom>
          Öne Çıkan Sporcular
        </Typography>
        <FeaturedAthletes />
      </Box>
      <Box sx={styles.fullWidth}>
        <hr />
      </Box>
      <Box sx={styles.section}>
        <Typography variant="h4" component="h2" gutterBottom>
          Spor Kategorileri
        </Typography>
        <Box sx={styles.categoryContainer}>
      
         <SportsRecords/>
  
        </Box>
      </Box>
      <Box sx={styles.fullWidth}>
        <hr />
      </Box>
      <Box sx={styles.section}>
        <Typography variant="h4" component="h2" gutterBottom>
          Canlı Skorlar
        </Typography>
        <LiveMatches/>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    padding: 2,
  },
  fullWidth: {
    width: '100%',
  },
  section: {
    marginBottom: 2,
    width: '100%',
  },
  newsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: 3,
  },
  newsItem: {
    backgroundColor: '#f9f9f9',
    padding: 2,
    borderRadius: 4,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  athleteContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    padding: 3,
  },
  athleteCard: {
    textAlign: 'center',
    padding: 2,
    borderRadius: 4,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '150px',  // Fixed width for uniformity
  },
  athleteImage: {
    width: '100%',
    height: '150px',  // Fixed height to ensure uniformity
    objectFit: 'cover',  // Ensure the image covers the box without stretching
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: 1,
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    padding: 3,
    backgroundColor: '#eaeaea',
  },
  spacing: {
    margin: '20px 0', // Adjusted margin for better spacing
  },
  newsItem: {
    backgroundColor: '#f9f9f9',
    padding: 2,
    borderRadius: 4,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  mobileImage: {
    width: '20%', // Mobil boyut
    height: 'auto',
    borderRadius: '4px 4px 0 0',
  },
  webImage: {
    width: '2%', // Web boyut
    height: 'auto',
    borderRadius: '4px 4px 0 0',
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    padding: 3,
    background: 'linear-gradient(135deg, #ffccff, #ffcccc)', // Gradient background
    borderRadius: 8,
  },
  mobileCarouselContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: 3,
    background: 'linear-gradient(135deg, #ccffcc, #ccccff)', // Gradient background
    borderRadius: 8,
    width:'100%'
  },
  largeCarousel: {
    flex: 2,
  },
  smallCarousels: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  mobileSmallCarousels: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',

  },
};

export default Home;

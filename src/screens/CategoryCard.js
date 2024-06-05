import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

function CategoryCard({ category }) {
  return (
    <div style={styles.cardContainer}>
      <Card sx={{ 
          minWidth: 100, 
          maxWidth: 300, 
          backgroundColor: '#f0f0f0', 
          borderRadius: '15px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
          } 
        }} 
      >
        <CardMedia
          component="img"
          height="140"
          image={category.imageUrl}
          alt={category.title}
        />
        <CardContent style={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div" style={styles.title}>
            {category.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={styles.description}>
            {category.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

const styles = {
  cardContainer: {
    flex: 1,
    padding: 24,
    position: 'relative',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    textAlign: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: '#333'
  },
  description: {
    color: '#777'
  }
};

export default CategoryCard;

import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

function CategoryCard({ category }) {
  return (
    <div style={styles.cardContainer}>
      <Card sx={{ minWidth: 100, maxWidth: 300, backgroundColor: '#f0f0f0' }}>
        <CardMedia
          component="img"
          height="140"
          image={category.imageUrl}
          alt={category.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
  }
};

export default CategoryCard;

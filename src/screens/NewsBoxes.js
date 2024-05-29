// NewsBoxes.js
import * as React from 'react';
import { Box, Typography } from '@mui/material';

const newsItems = [
  { imgPath: 'https://via.placeholder.com/150', label: 'Project 1' },
  { imgPath: 'https://via.placeholder.com/150', label: 'Project 2' },
  { imgPath: 'https://via.placeholder.com/150', label: 'Project 3' },
  { imgPath: 'https://via.placeholder.com/150', label: 'Project 4' },
  { imgPath: 'https://via.placeholder.com/150', label: 'Project 5' },
];

const NewsBoxes = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {newsItems.map((item, index) => (
        <Box key={index} sx={{ width: '18%', textAlign: 'center', marginBottom: 2 }}>
          <Box
            component="img"
            src={item.imgPath}
            alt={item.label}
            sx={{ width: '100%', height: 'auto' }}
          />
          <Typography variant="subtitle1">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NewsBoxes;

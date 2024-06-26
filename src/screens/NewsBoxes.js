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
        <Box
          key={index}
          sx={{
            width: '18%',
            textAlign: 'center',
            marginBottom: 2,
            padding: 1,
            borderRadius: 2,
            boxShadow: 3,
            color: 'white',
            transition: 'transform 0.3s',
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Box
            component="img"
            src={item.imgPath}
            alt={item.label}
            sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
          />
          <Typography variant="subtitle1" sx={{ marginTop: 1, color: 'white' }}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NewsBoxes;

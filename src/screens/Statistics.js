import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const statisticsData = {
  Futbol: {
    'En çok gol atan oyuncu': 'Lionel Messi',
    'En çok asist yapan oyuncu': 'Xavi Hernandez',
    'En çok kupa kazanan takım': 'Real Madrid',
    'En çok Şampiyonlar Ligi kazanan takım': 'Real Madrid',
    'En çok Dünya Kupası kazanan takım': 'Brezilya'
  },
  Basketbol: {
    'En çok sayı atan oyuncu': 'Michael Jordan',
    'En çok asist yapan oyuncu': 'John Stockton',
    'En çok şampiyon olan takım': 'Los Angeles Lakers',
    'En çok MVP ödülü alan oyuncu': 'Kareem Abdul-Jabbar'
  },
  Voleybol: {
    'En çok sayı atan oyuncu': 'Karch Kiraly',
    'En çok blok yapan oyuncu': 'Maxim Mikhaylov',
    'En çok şampiyon olan takım': 'Zenit Kazan',
    'En çok MVP ödülü alan oyuncu': 'Karch Kiraly'
  },
  Tenis: {
    'En çok Grand Slam kazanan oyuncu': 'Roger Federer',
    'En çok Wimbledon kazanan oyuncu': 'Roger Federer',
    'En çok Fransa Açık kazanan oyuncu': 'Rafael Nadal',
    'En çok US Open kazanan oyuncu': 'Jimmy Connors'
  }
};

const Statistics = () => {
  const [selectedSport, setSelectedSport] = useState('Futbol');
  const [selectedCategory, setSelectedCategory] = useState('En çok gol atan oyuncu');

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
    setSelectedCategory(Object.keys(statisticsData[event.target.value])[0]);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = Object.keys(statisticsData[selectedSport]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dünya Spor İstatistikleri
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Spor Dalları</InputLabel>
        <Select value={selectedSport} onChange={handleSportChange}>
          {Object.keys(statisticsData).map((sport) => (
            <MenuItem key={sport} value={sport}>
              {sport}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Kategoriler</InputLabel>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="h6">
        {selectedCategory}:
      </Typography>
      <Typography>
        {statisticsData[selectedSport][selectedCategory]}
      </Typography>
    </Box>
  );
};

export default Statistics;

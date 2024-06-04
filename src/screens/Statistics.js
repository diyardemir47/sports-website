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
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
    setSelectedCategory('');
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = Object.keys(statisticsData[selectedSport]);

  return (
    <Box sx={{ p: 3, backgroundColor: '#ffebee', borderRadius: '10px', boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#d32f2f', textAlign: 'center', fontFamily: 'Roboto', fontWeight: 'bold' }}>
        Dünya Spor İstatistikleri
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel sx={{ color: '#d32f2f' }}>Spor Dalları</InputLabel>
        <Select
          value={selectedSport}
          onChange={handleSportChange}
          sx={{ backgroundColor: '#ffffff', borderRadius: '4px' }}
        >
          {Object.keys(statisticsData).map((sport) => (
            <MenuItem key={sport} value={sport}>
              {sport}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel sx={{ color: '#d32f2f' }}>Kategoriler</InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          sx={{ backgroundColor: '#ffffff', borderRadius: '4px' }}
        >
          <MenuItem disabled value="">
            Seçiniz
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedCategory && (
        <>
          <Typography variant="h6" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
            {selectedCategory}:
          </Typography>
          <Typography sx={{ color: '#d32f2f' }}>
            {statisticsData[selectedSport][selectedCategory]}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Statistics;

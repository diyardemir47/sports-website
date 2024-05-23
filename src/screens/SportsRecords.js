import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const SportsRecords = () => {
  return (
    <Box style={styles.container}>
      <Paper elevation={3} style={styles.recordItem}>
        <Typography variant="h6">Futbol Rekorları</Typography>
        <ul style={styles.recordList}>
          <li style={styles.listItem}>En çok gol atan oyuncu: Cristiano Ronaldo - 807 gol</li>
          <li style={styles.listItem}>En çok Ballon d'Or alan oyuncu: Lionel Messi - 7 ödül</li>
          <li style={styles.listItem}>En çok FIFA Dünya Kupası alan takım: Brezilya - 5 şampiyonluk</li>
        </ul>
      </Paper>
      <Paper elevation={3} style={styles.recordItem}>
        <Typography variant="h6">Basketbol Rekorları</Typography>
        <ul style={styles.recordList}>
          <li style={styles.listItem}>En çok NBA şampiyonluğu alan takım: Boston Celtics - 17 şampiyonluk</li>
          <li style={styles.listItem}>En çok NBA MVP ödülü alan oyuncu: Kareem Abdul-Jabbar - 6 ödül</li>
          <li style={styles.listItem}>En çok sayı atan oyuncu: Kareem Abdul-Jabbar - 38,387 sayı</li>
        </ul>
      </Paper>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: 3,
  },
  recordItem: {
    padding: 3,
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  recordList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: '4px',
    padding: '8px',
    marginBottom: '8px',
    color: 'white', // Metin rengi
    fontWeight: 'bold', // Kalın font
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Gölge efekti
  },
};

export default SportsRecords;

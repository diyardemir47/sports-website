import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const SportsRecords = () => {
  return (
    <Box style={styles.container}>
      <Paper elevation={3} style={styles.recordItem}>
      <Typography variant="h6" style={styles.title}>Futbol Rekorları</Typography>
        <ul style={styles.recordList}>
          <li style={styles.listItem}>
            <SportsSoccerIcon style={styles.icon} />
            En çok gol atan oyuncu: Cristiano Ronaldo - 807 gol
          </li>
          <li style={styles.listItem}>
            <SportsSoccerIcon style={styles.icon} />
            En çok Ballon d'Or alan oyuncu: Lionel Messi - 7 ödül
          </li>
          <li style={styles.listItem}>
            <SportsSoccerIcon style={styles.icon} />
            En çok FIFA Dünya Kupası alan takım: Brezilya - 5 şampiyonluk
          </li>
        </ul>
      </Paper>
      <Paper elevation={3} style={styles.recordItem}>
      <Typography variant="h6" style={styles.title}>Basketbol Rekorları</Typography>
        <ul style={styles.recordList}>
          <li style={styles.listItem}>
            <SportsBasketballIcon style={styles.icon} />
            En çok NBA şampiyonluğu alan takım: Boston Celtics - 17 şampiyonluk
          </li>
          <li style={styles.listItem}>
            <SportsBasketballIcon style={styles.icon} />
            En çok NBA MVP ödülü alan oyuncu: Kareem Abdul-Jabbar - 6 ödül
          </li>
          <li style={styles.listItem}>
            <SportsBasketballIcon style={styles.icon} />
            En çok sayı atan oyuncu: Kareem Abdul-Jabbar - 38,387 sayı
          </li>
        </ul>
      </Paper>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f0f0f0', // Hafif bir arka plan rengi
  },
  recordItem: {
    flex: '1 1 calc(50% - 20px)', // Eşit şekilde dağıtmak için esneklik
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Daha belirgin bir gölge
    backgroundColor: 'white', // Beyaz arka plan
    boxSizing: 'border-box',
  },
  recordList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  title: {
    color: '#4A00E0',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    borderBottom: '2px solid #8E2DE2',
    paddingBottom: '5px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
    borderRadius: '8px', // Daha fazla köşe yumuşatma
    padding: '10px',
    marginBottom: '10px',
    color: 'white', // Metin rengi
    fontWeight: 'bold', // Kalın font
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Gölge efekti
    fontSize:'12px'
  },
  icon: {
    marginRight: '10px', // Simge ile metin arasındaki boşluk
  },
};

export default SportsRecords;

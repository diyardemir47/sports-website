import React from 'react';
import { Box, Typography } from '@mui/material';

function AnnouncementComponent() {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">📢 Yeni Güncelleme!</Typography>
      <Typography variant="body1">
        Şimdi uygulamamızda canlı maçları takip edebilirsiniz. Hemen kontrol edin!
      </Typography>
    </Box>
  );
}

const styles = {
  container: {
    padding: 16,
    backgroundColor: '#ffd700',
    borderRadius: 8,
    marginBottom: 16,
    textAlign: 'center',
  },
};

export default AnnouncementComponent;

// src/components/FootballFixtures.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

function FootballFixtures() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get('https://api.collectapi.com/football/results?data.league=super-lig', {
          headers: {
            'content-type': 'application/json',
            'authorization': 'apikey 73c2H1uunrGdGY7uCmnN2y:6056ZmauBpQSyW0MP4TMr7'
          }
        });
        setFixtures(response.data.result);
      } catch (error) {
        console.error('Error fetching fixtures data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 2, marginBottom: 4 }}>
      <Typography variant="h6" gutterBottom align="center">
        Fikstür
      </Typography>
      <List>
        {fixtures.map((fixture, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={`${fixture.home} vs ${fixture.away}`}
              secondary={`${fixture.date} - ${fixture.time}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default FootballFixtures;

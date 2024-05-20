import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

function FootballStandings() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get('https://api.collectapi.com/football/league?data.league=super-lig', {
          headers: {
            'content-type': 'application/json',
            'authorization': 'apikey 73c2H1uunrGdGY7uCmnN2y:6056ZmauBpQSyW0MP4TMr7'
          }
        });
        const standingsData = response.data.result;
        setStandings(standingsData);
      } catch (error) {
        console.error('Error fetching standings data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return (
      <Typography variant="body1" align="center">Loading...</Typography>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
      <Typography variant="h6" gutterBottom align="center" sx={{ marginTop: 2 }}>
        Puan Durumu
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Takım</TableCell>
            <TableCell align="center">Oynanan</TableCell>
            <TableCell align="center">Galibiyet</TableCell>
            <TableCell align="center">Beraberlik</TableCell>
            <TableCell align="center">Mağlubiyet</TableCell>
            <TableCell align="center">Puan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map((team, index) => (
            <TableRow key={index}>
              <TableCell align="center">
                <Link to={`/team/${team.team}`} style={{ textDecoration: 'none', color: 'inherit' }}>{team.team}</Link>
              </TableCell>
              <TableCell align="center">{team.play}</TableCell>
              <TableCell align="center">{team.win}</TableCell>
              <TableCell align="center">{team.draw}</TableCell>
              <TableCell align="center">{team.lose}</TableCell>
              <TableCell align="center">{team.point}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FootballStandings;

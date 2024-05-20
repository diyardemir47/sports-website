import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, CircularProgress, useMediaQuery } from '@mui/material';
import axios from 'axios';

function FootballStandings() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get('https://apiv2.allsportsapi.com/football/', {
          params: {
            met: 'Standings',
            leagueId: 207,
            APIkey: 'b31c5e0a2588400341a725c9caad0f3217ded08ee7e9c93c203031a1eb52ae48', // Your API key
          },
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        setStandings(response.data.result.total);
      } catch (error) {
        console.error('Error fetching standings', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ marginBottom: 4, width: '100%', overflowX: 'auto', backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom align="center" sx={{ marginTop: 2 }}>
        Puan Durumu
      </Typography>
      <Table sx={{ minWidth: isMobile ? 'auto' : 150 }}>
        <TableHead sx={{ backgroundColor: 'primary.main' }}>
          <TableRow>
            <TableCell align="center" sx={{ color: 'white', minWidth: '80px' }}>Takım</TableCell>
            <TableCell align="center" sx={{ color: 'white', minWidth: '40px' }}>Oynanan</TableCell>
            <TableCell align="center" sx={{ color: 'white', minWidth: '40px' }}>G</TableCell>
            <TableCell align="center" sx={{ color: 'white', minWidth: '40px' }}>B</TableCell>
            <TableCell align="center" sx={{ color: 'white', minWidth: '40px' }}>M</TableCell>
            <TableCell align="center" sx={{ color: 'white', minWidth: '40px' }}>Averaj</TableCell>
            <TableCell align="center" sx={{ color: 'white', minWidth: '40px' }}>P</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map((team, index) => (
            <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, '&:hover': { backgroundColor: '#e0f7fa' } }}>
              <TableCell align="center">
                <Link to={`/team/${team.team_key}`} style={{ textDecoration: 'none', color: 'inherit' }}>{team.standing_team}</Link>
              </TableCell>
              <TableCell align="center">{team.standing_P}</TableCell>
              <TableCell align="center">{team.standing_W}</TableCell>
              <TableCell align="center">{team.standing_D}</TableCell>
              <TableCell align="center">{team.standing_L}</TableCell>
              <TableCell align="center">{team.standing_GD}</TableCell>
              <TableCell align="center">{team.standing_PTS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FootballStandings;

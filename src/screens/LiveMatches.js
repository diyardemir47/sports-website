import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, CircularProgress, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const GradientTableCell = styled(TableCell)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  padding: '8px',
}));

const ScoreTableCell = styled(TableCell)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  padding: '8px',
}));

const determineBackgroundColor = (status) => {
  return status === 'Match Finished' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 128, 0, 0.1)';
};

const determineWinnerStyle = (homeScore, awayScore, team) => {
  if (homeScore > awayScore && team === 'home') {
    return { textDecoration: 'underline' };
  } else if (awayScore > homeScore && team === 'away') {
    return { textDecoration: 'underline' };
  }
  return {};
};

function LiveMatches() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchLiveMatches = async () => {
      try {
        const response = await axios.get('https://apiv2.allsportsapi.com/football/', {
          params: {
            met: 'Livescore',
            APIkey: 'b31c5e0a2588400341a725c9caad0f3217ded08ee7e9c93c203031a1eb52ae48', // API anahtarınızı buraya ekleyin
          },
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        setLiveMatches(response.data.result);
      } catch (error) {
        console.error('Error fetching live matches', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveMatches();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ marginBottom: 4, width: '100%', overflowX: 'auto' }}>
      <Typography variant="h6" gutterBottom align="center" sx={{ marginTop: 2 }}>
        Canlı Maçlar
      </Typography>
      <Table sx={{ minWidth: isMobile ? 'auto' : 250 }}>
        <TableHead>
          <TableRow>
            <GradientTableCell align="center" sx={{ minWidth: '100px' }}>Lig</GradientTableCell>
            <GradientTableCell align="center" sx={{ minWidth: '120px' }}>Ev Sahibi Takım</GradientTableCell>
            <GradientTableCell align="center" sx={{ minWidth: '120px' }}>Deplasman Takımı</GradientTableCell>
            <ScoreTableCell align="center" sx={{ minWidth: '60px' }}>Skor</ScoreTableCell>
            <GradientTableCell align="center" sx={{ minWidth: '80px' }}>Durum</GradientTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liveMatches.length > 0 ? (
            liveMatches.map((match, index) => {
              const homeScore = parseInt(match.event_ft_result.split(' - ')[0], 10);
              const awayScore = parseInt(match.event_ft_result.split(' - ')[1], 10);

              return (
                <TableRow key={index} sx={{ backgroundColor: determineBackgroundColor(match.event_status) }}>
                  <TableCell align="center">{match.league_name}</TableCell>
                  <TableCell align="center" style={determineWinnerStyle(homeScore, awayScore, 'home')}>
                    <Box sx={{ background: 'linear-gradient(to right, #8E2DE2, #4A00E0)', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
                      {match.event_home_team}
                    </Box>
                  </TableCell>
                  <TableCell align="center" style={determineWinnerStyle(homeScore, awayScore, 'away')}>
                    <Box sx={{ background: 'linear-gradient(to right, #8E2DE2, #4A00E0)', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
                      {match.event_away_team}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', color: 'white', padding: '', borderRadius: '5px' }}>
                      {match.event_ft_result}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{match.event_status}</TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">Şu anda canlı maç bulunmamaktadır.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LiveMatches;

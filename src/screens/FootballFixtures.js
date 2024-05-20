import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function FootballFixtures() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=b31c5e0a2588400341a725c9caad0f3217ded08ee7e9c93c203031a1eb52ae48&from=2021-05-18&to=2021-05-18`);
        setFixtures(response.data.result);
      } catch (error) {
        console.error('Error fetching fixtures data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  // Sayfalama işlevi
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Sayfada gösterilecek fikstürlerin hesaplanması
  const fixturesPerPage = 15;
  const pageCount = Math.ceil(fixtures.length / fixturesPerPage);
  const offset = currentPage * fixturesPerPage;
  const currentFixtures = fixtures.slice(offset, offset + fixturesPerPage);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 1, marginBottom: 2 }}>
      <Typography variant="h6" gutterBottom align="center">
        Fikstür
      </Typography>
      <List>
        {currentFixtures.map((fixture, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={`${fixture.event_home_team} vs ${fixture.event_away_team}`}
              secondary={`${fixture.event_date} - ${fixture.event_time}`}
            />
          </ListItem>
        ))}
      </List>
      <Box display="flex" justifyContent="center" mt={2}>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </Box>
    </Paper>
  );
}

export default FootballFixtures;

import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, Card, CardHeader, Avatar, Box, CircularProgress } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import './GoalKings.css'; // Make sure to create this CSS file

function GoalKings() {
  const [goalKings, setGoalKings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const goalKingsPerPage = 5;

  useEffect(() => {
    const fetchGoalKings = async () => {
      try {
        const response = await axios.get('https://apiv2.allsportsapi.com/football/', {
          params: {
            met: 'Topscorers',
            leagueId: 207,
            APIkey: 'b31c5e0a2588400341a725c9caad0f3217ded08ee7e9c93c203031a1eb52ae48', // Your API key
          },
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        setGoalKings(response.data.result);
      } catch (error) {
        console.error('Error fetching goal kings', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoalKings();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayGoalKings = goalKings
    .slice(currentPage * goalKingsPerPage, (currentPage + 1) * goalKingsPerPage)
    .map((goalKing, index) => (
      <ListItem key={index} style={{ width: '100%' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            avatar={
              <Avatar>
                <SportsSoccerIcon />
              </Avatar>
            }
            title={goalKing.player_name}
            subheader={`Takım: ${goalKing.team_name} | Goller: ${goalKing.goals} | Penaltı Golleri: ${goalKing.penalty_goals}`}
          />
        </Card>
      </ListItem>
    ));

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom align="center">
        Gol Kralı
      </Typography>
      <List style={{ width: '100%' }}>
        {displayGoalKings}
      </List>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={Math.ceil(goalKings.length / goalKingsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default GoalKings;

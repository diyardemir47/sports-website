import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid, Card, CardActionArea, CardContent, CardMedia, CircularProgress } from '@mui/material';
import axios from 'axios';

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('https://apiv2.allsportsapi.com/football/?&met=Players&APIkey=b31c5e0a2588400341a725c9caad0f3217ded08ee7e9c93c203031a1eb52ae48');
        setPlayers(response.data.result);
      } catch (error) {
        console.error('Error fetching players', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      {players.map((player, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardActionArea component={Link} to={`/player/${player.player_key}`}>
              <CardMedia
                component="img"
                height="200"
                image={player.player_image}
                alt={player.player_name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {player.player_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Takım: {player.team_name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Yaş: {player.player_age}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Maç Sayısı: {player.player_match_played}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Gol: {player.player_goals}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Asist: {player.player_assists}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Players;

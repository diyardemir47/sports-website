import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function TakimView() {
  const [teamDetails, setTeamDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await axios.get(`https://api.collectapi.com/football/team?data.team=${teamName}`, {
          headers: {
            'content-type': 'application/json',
            'authorization': 'apikey 73c2H1uunrGdGY7uCmnN2y:6056ZmauBpQSyW0MP4TMr7'
          }
        });
        const teamData = response.data.result;
        setTeamDetails(teamData);
      } catch (error) {
        console.error('Error fetching team details', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamDetails();
  }, [teamName]);

  if (loading) {
    return (
      <Typography variant="body1" align="center">Loading...</Typography>
    );
  }

  if (!teamDetails.teamName) {
    return (
      <Typography variant="body1" align="center">Takım bilgileri bulunamadı.</Typography>
    );
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom align="center">
        {teamDetails.teamName} Takım Detayları
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Oynanan Maçlar" secondary={teamDetails.playedMatches} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Galibiyetler" secondary={teamDetails.wins} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Beraberlikler" secondary={teamDetails.draws} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mağlubiyetler" secondary={teamDetails.losses} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Puan" secondary={teamDetails.points} />
        </ListItem>
      </List>
    </div>
  );
}

export default TakimView;

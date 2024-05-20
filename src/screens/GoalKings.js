import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, Card, CardHeader, Avatar } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Icon for goal kings
import ReactPaginate from 'react-paginate';
import './GoalKings.css'; // CSS for pagination styles
import KingCrownIcon from './KingCrownIcon';

function GoalKings() {
  const [goalKings, setGoalKings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const goalKingsPerPage = 5;

  useEffect(() => {
    // Simulated data from local array
    const customGoalKings = [
      { name: 'MAURO EMANUEL ICARDI', team: 'GALATASARAY A.Ş.', goals: 23 },
      { name: 'EDIN DZEKO', team: 'FENERBAHÇE A.Ş.', goals: 20 },
      { name: 'REI MANAJ', team: 'EMS YAPI SİVASSPOR', goals: 18 },
      { name: 'THIAM MAME BABA', team: 'SİLTAŞ YAPI PENDİKSPOR FUTBOL A.Ş.', goals: 17 },
      { name: 'ADAM BÜKŞA', team: 'BITEXEN ANTALYASPOR', goals: 15 },
      { name: 'EBERE PAUL ONUACHU', team: 'TRABZONSPOR A.Ş.', goals: 15 },
      // Eklemek istediğiniz diğer oyuncuları buraya aynı yapıyı kullanarak ekleyebilirsiniz.
    ];
    
    // Setting the state after fetching the data
    setGoalKings(customGoalKings);
    setLoading(false);
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
                <SportsSoccerIcon /> {/* Soccer ball icon */}
              </Avatar>
            }
            title={goalKing.name}
            subheader={`Goller: ${goalKing.goals}, Oynadığı Maç: ${goalKing.play || ''}`}
          />
        </Card>
      </ListItem>
    ));

  if (loading) {
    return (
      <Typography variant="body1" align="center">Loading...</Typography>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom align="center">
        Gol Kralı
      </Typography>
      <KingCrownIcon style={{ fontSize: '2rem', color: 'gold' }} /> {/* KingCrownIcon */}
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

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { CssBaseline, Box, useMediaQuery, useTheme } from '@mui/material';
import TakimView from './screens/TakimView';
import FootballStandings from './screens/FootballStandings';
import FootballFixtures from './screens/FootballFixtures';
import GoalKings from './screens/GoalKings';
import LiveMatches from './screens/LiveMatches';
import Players from './screens/Players';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <CssBaseline />
        <Header />
        <Box display="flex" flexGrow={1} mt={2} flexDirection={isMobile ? 'column-reverse' : 'row'}>
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team/:teamName" element={<TakimView />} />
            </Routes>
          </Box>
          {!isMobile && (
            <Box component="aside" sx={{ width: '30%', ml: 2 }}>
              <FootballStandings />
              <FootballFixtures />
              <LiveMatches/>
              <GoalKings />
   
            </Box>
          )}
        </Box>
        <Box mt={4}>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;

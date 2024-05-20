import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Container, CssBaseline, Box } from '@mui/material';
import TakimView from './screens/TakimView';

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <CssBaseline />
        <Header />
        <Container component="main" sx={{ flexGrow: 1, mt: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add route for TakimView */}
            <Route path="/team/:teamName" element={<TakimView />} />
          </Routes>
        </Container>
        <Box mt={4}>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ flexGrow: 1, mt: 2 }}>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

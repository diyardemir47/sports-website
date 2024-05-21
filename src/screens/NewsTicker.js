import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    width: '100%', // Genişlik yüzde yüz olarak ayarlandı
  },
  tickerItem: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2), // Metinlerin kenarlardan boşlukları arttırıldı
    marginRight: theme.spacing(2),
  },
}));

function NewsTicker() {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=c04c8813ed0f41f7a2af5e23b07bcdb8')
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <Paper className={classes.root} style={{    position: 'relative',    bottom:'0px',marginBottom:'150px'}}>
      <Typography variant="h6" gutterBottom>
        Son Haberler
      </Typography>
      <Carousel autoPlay={true} interval={2000}>
        {news.map((article, index) => (
          <Paper key={index} elevation={3} className={classes.tickerItem}>
            <Typography variant="body1">
              {article.title}
            </Typography>
          </Paper>
        ))}
      </Carousel>
    </Paper>
  );
}

export default NewsTicker;

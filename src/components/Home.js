import React from 'react';
import SportsCarousel from '../screens/SportCarousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Kategori verileri
const categories = [
  { title: 'Futbol', description: 'Futbol ile ilgili en son haberler ve maç özetleri.', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300' },
   { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300' },
   { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300' },
   { title: 'Voleybol', description: 'Voleybol ligi ve turnuvaları hakkında güncel bilgiler.', imageUrl: 'https://via.placeholder.com/300' },
];

function Home() {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <SportsCarousel />
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }) {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 300 }}>
      <img src={category.imageUrl} alt={category.title} style={{ width: '100%' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Home;

import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function Morna({ image, title, description,price }) {
  return (
    <Card sx={{ maxWidth: 355 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
        />
        
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
         <h2>Buy Now - ${price}</h2>
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Dulm() {
  const cardData = [
    {
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/614AuRRn8NL._AC_UF894,1000_QL80_.jpg',
      price: 29.99,
      
    },
    {
      image: 'https://www.incrediblegifts.in/wp-content/uploads/2022/07/c-5.jpg',
      price: 89.99,
    },
    {
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91zvsjtEEDL._SX679_.jpg',
      price: 49.99,
    },
    {
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31Hb4Pgc1LL._SX300_SY300_QL70_FMwebp_.jpg',
      price: 99.99,
    },
    {
      image: 'https://images-cdn.ubuy.co.in/634e4703c886164e87161b42-sisters-birthday-gifts-from-sister.jpg',
      price: 30.99,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5MSR19xWzKiG9yYQFn3Y-kRT2qYLmzAyFjAKkS3B1vRZlALi0btYXRkD4-2wvxlp-7o&usqp=CAU',
      price: 29.99,
    },
    // Add more card data as needed
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Morna {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

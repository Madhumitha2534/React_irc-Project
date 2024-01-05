import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

// MultiActionAreaCardGrid.js

// ... (import statements)

function MultiActionAreaCard({ image, title, description, price }) {
  return (
    <Card sx={{ maxWidth: 355 }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt={title} />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <h2>Buy Now - ${price}</h2>
        </Button>
      </CardActions>
    </Card>
  );
}

export default function MultiActionAreaCardGrid() {
  const cardData = [
    {
      image: 'https://www.giftify.in/cdn/shop/files/image14_020b6bd4-c2d1-446c-ba72-a4f3188d7ac4.jpg?v=1685268013',
      price: 19.99,
    },
    {
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61T5fz5ydVL._AC_UF1000,1000_QL80_.jpg',
      price: 29.99,
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/LX/GK/EM/53690568/photo-frame-metal-keychain-h529.jpg',
      price: 14.99,
    },
    {
      image: 'https://vivagifts.in/wp-content/uploads/2021/09/Men-And-Women-Sketch-Wallet-Combo-2.jpeg',
      price: 49.99,
    },
    {
      image: 'https://www.graphixking.com/wp-content/uploads/2021/01/Valentine%E2%80%99s-Day-Gifts.jpg',
      price: 39.99,
    },
    {
      image: 'https://resellafy.com/wp-content/uploads/2021/07/Rakhi-Couple-combo.jpg',
      price: 24.99,
    },
    // Add more card data as needed
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MultiActionAreaCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

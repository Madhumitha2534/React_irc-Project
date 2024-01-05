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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfK9214E0E1rrFuTbYjrV_xx9LGI5Qq4qo65S-UwSyiyHZ3DZCopGXlrNlBPspp2L6Q6Q&usqp=CAU',
      price: 19.99,
      
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fU6UW3wtIupWcabT0oaNv6m4CMA5TH2P8A&usqp=CAU',
      price: 39.99
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC_GYEvxfwi1YohVVZlT-BF4RVe7_5vdp2Q&usqp=CAU',
      price: 89.99
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xSGmHkPuV4fMu7UbxEWA6y3rGFCN4HIiJw&usqp=CAU',
      price: 19.99
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldt-r5P5xzNkvp-hmdWSRFm_gwb6rqG_c0w&usqp=CAU',
      price: 19.99
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6oFhPGtHOH_JwYfaiiZvFV3CUKoTzyrmMA&usqp=CAU',
      price: 69.99
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

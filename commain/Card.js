import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          G{bull}I{bull}F{bull}T{bull}S
        </Typography>
        <Typography sx={{ mb: 3 }} color="text.secondary">
          <h2>that speaks louder</h2>
        </Typography>
        <Typography variant="body2">
         <h3>"Thoughtful Gifts,endless Memories"</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Explore More</Button>
      </CardActions>
    </Card>
  );
}
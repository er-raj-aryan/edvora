import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card elevation={8} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt={props.imgName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Name}
        </Typography>
        <Typography variant="body2" row={3} color="text.secondary">
        {props.Name} are a widespread group of <strong>{props.Name}</strong> reptiles, with over 6,000
          species, ranging across all continents except {props.Name} 
        </Typography>
      </CardContent>
    </Card>
  );
}

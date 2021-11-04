import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Service = (props) => {
    const {name, img, description} = props.service;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
            <CardMedia
        component="img"
        style={{
            width: 'auto',
            margin: '40px auto'
        }}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
            
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
    );
};

export default Service;
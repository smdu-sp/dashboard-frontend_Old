import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import './Card.css';

export default function CardDashboard(props: any) {
  return (
    <Card variant="solid" color={props.color} invertedColors
     sx={{
        width: 300,
        height: 150,
        marginTop: '5px',
        marginLeft: '5px',
        "--Card-padding": "24px",
        "--Card-radius": "0px"
      }}>
      <CardContent orientation="horizontal">        
        <CardContent>
          <Typography level="body-lg">{props.titulo}</Typography>
          <Typography level="h1">0</Typography>
        </CardContent>
      </CardContent>      
    </Card>
  );
}
import React from 'react';
import Paper from '@mui/material/Paper';



export default function ImageComponent(props) {
  return (
    <Paper elevation="0">
        <img src={props.image} alt="Illustration of a cat" />
    </Paper>

  );
}
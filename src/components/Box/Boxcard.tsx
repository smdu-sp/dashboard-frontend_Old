import * as React from 'react';
import Box from '@mui/joy/Box';
import BarChart from "@/components/barchart/barchart";
import Tecchart from "@/components/tecchart/Tecchart";
import BoxCard from "@/components/Box/Boxcard";


export default function BoxSystemProps(props : any) {
  return (
    <Box
      height={350}
      width={840}      
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '1px solid grey', marginTop: '5px', marginLeft: '5px', backgroundColor: '#000' }}
    >
       {props.grafico}
    </Box>
  );
}
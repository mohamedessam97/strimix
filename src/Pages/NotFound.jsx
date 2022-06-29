import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const NotFound = () => {
  return <Box component="section">
     <Container
      maxWidth='xs'
      sx={{ height: "280px", boxSizing: "border-box", paddingTop: "3rem" , backgroundColor:'rgba(7, 9, 17, 0.7)', marginTop:'5rem'  }}
    >
      <Stack direction='column' justifyContent='space-around' alignItems='center' gap={2}>
        <ErrorOutlineIcon  sx={{ color:'#f50057' , width:'40px' , height:'40px'}}/>

        <Typography component='p' variant="h2" sx={{color:'#f50057'}}>404</Typography>
        <Typography component='p' color='whitesmoke'>The page which you are requesting is Not found</Typography>
      </Stack>
    </Container>
  </Box>;
};

export default NotFound;

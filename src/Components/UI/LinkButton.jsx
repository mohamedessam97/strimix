import React from 'react';
import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';



const StyledButton = styled(Button)(({ theme }) => ({
    display:'flex',
    flexWrap:'wrap',
    border: "1px solid #333",
    color: "#FFFFFF",
    fontSize: "1rem",
    fontWeight: "900px",
    backgroundColor:'#252830',
  }));
  
  const StyledContainer = styled(Box)(({theme}) => ({
  width:'auto' , 
  height:'auto',
  margin:'auto',
  padding:'0px',
  
  
   '& img':{
       width:'60px',
       height:'40px'
   }
  }))
const LinkButton = () => {
    const Navigate = useNavigate();
    const NavigatHandler = () => Navigate('/choosedevice')
    
    return (
<StyledButton onClick={NavigatHandler} sx={{  padding: {lg:"1rem 2.5rem" , md:'10px 10px' , sm:'10px 5px' , sx:'10px 5px'}}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center" 
          gap={5} sx={{ flexWrap : { xs:'wrap'} }}  >
         
          <Typography variant="p" component='div' textAlign='center' sx={{width:{xs:'200px'} , margin:{xs:'auto'}}}>Continue</Typography>
          <StyledContainer component='span' >
            <Stack direction='row' justifyContent='space-between' alignItems='center' gap={1}>
        <ArrowForwardIosIcon />
            </Stack>
            </StyledContainer>

        
         
         
        </Stack>
      </StyledButton>
    );
};

export default LinkButton;